import { PrismaClient } from "@prisma/client";
import { generateURL } from "../../../utils/vnpay";

const prisma = new PrismaClient();

async function vnpay(req: any) {
    const {userId, voucherId, total, fullname, address, phoneNumber, email} = req.body;
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
            isEnable: true
        }
    })
    const url = generateURL(req, createPayment.id, createPayment.total);
    return url;
}

export default { vnpay };
