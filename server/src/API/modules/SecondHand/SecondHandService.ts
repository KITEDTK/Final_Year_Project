import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(paymentDetailId: string, amountToSell: number){
    const result = await prisma.secondHand.create({
        data:{
            paymentDetailId: paymentDetailId,
            amount: amountToSell
        }
    });
    return result;
}
async function allSecondHand(){
    const result = await prisma.secondHand.findMany();
    return result;
}

export default {
    create,
    allSecondHand
}