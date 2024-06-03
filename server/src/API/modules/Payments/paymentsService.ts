import { PrismaClient } from "@prisma/client";
import { generateURL } from "../../../utils/vnpay";
import { uuid } from "uuidv4";
import { sortObject } from "../../../utils/sortObject";

const prisma = new PrismaClient();

async function vnpay(req: any) {
    const {total} = req.body;
    const uniqueId = uuid();
    const url = generateURL(req, uniqueId , total);
    const dataCreate = {id: uniqueId, ...req.body};
    await createPayment(dataCreate);
    return url;
}
async function createPayment(input: any){
    const {id,userId, voucherId, total, fullname, address, phoneNumber, email, clothDetail} = input;
    const checkExist = await prisma.payments.findUnique({
        where:{
            id: id
        }
    });
    if(checkExist){
        throw 'Đơn hàng đã được xử lí';
    }
    const createPayment = await prisma.payments.create({
        data:{
            id: id,
            ...(userId ? {userId: userId} : {}),
            ...(voucherId ? {voucherId: voucherId} : {}),
            total: total,
            fullname: fullname,
            address: address,
            email: email,
            phoneNumber: phoneNumber,
            isPaid: false,
            isEnable: true,
            vnpay: true,
            onlinePay: true
        }
    });
    const data: any = [];
    clothDetail.forEach((item: any)=>{
        data.push({
            paymentId: id,
            clothId: item.id,
            amount: item.amount
        })
    });
    await prisma.paymentDetails.createMany({
        data: data
    });
    return createPayment;
}
async function returnVnpay(req: any, res: any){
    let vnp_Params = req.query;

    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    let tmnCode = "KHBLVREA";
    let secretKey = "XWSSNAPCHGECJYUNQEOLBAESMEPOOGDR";

    let querystring = require('qs');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");     
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     

    if(secureHash === signed){
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        await prisma.payments.update({
            where:{
                id:  vnp_Params['vnp_TxnRef']
            },
            data:{
                isPaid: true
            }
        })
        return 'success';
    } else{
        await prisma.paymentDetails.deleteMany({
            where:{
                id:  vnp_Params['vnp_TxnRef']
            }
        })
        await prisma.payments.delete({
            where:{
                id:  vnp_Params['vnp_TxnRef']
            }
        })
        return 'fail';
    }
}
export default { vnpay, createPayment, returnVnpay };
