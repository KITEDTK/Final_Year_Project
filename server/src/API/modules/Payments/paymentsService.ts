import { PrismaClient } from "@prisma/client";
import { generateURL } from "../../../utils/vnpay";
import { uuid } from "uuidv4";

const prisma = new PrismaClient();

async function vnpay(req: any) {
    const {total} = req.body;
    const uniqueId = uuid();
    const url = generateURL(req, uniqueId , total);
    return url;
}
async function createPayment(req: any){
    const {id,userId, voucherId, total, fullname, address, phoneNumber, email} = req.body;
    const createPayment = await prisma.payments.create({
        data:{
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
    return createPayment;
}
export default { vnpay, createPayment };
