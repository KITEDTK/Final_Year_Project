import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(clothDetailId: string, amountToSell: number){
    const result = await prisma.secondHand.create({
        data:{
            clothDetailId: clothDetailId,
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