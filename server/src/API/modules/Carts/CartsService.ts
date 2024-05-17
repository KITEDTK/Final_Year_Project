import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addToCarts(userId: string, clothDetailId: string){
    const check = await prisma.carts.findFirst({
        where:{
            userId: userId,
            clothDetailId: clothDetailId,
            isCheckout: false
        }
    });
    if(check){
        await prisma.carts.update({
            where:{
                id: check.id
            },
            data:{
                amount: check.amount + 1
            }
        })
    }else{
        await prisma.carts.create({
            data:{
                userId: userId,
                clothDetailId: clothDetailId,
                isCheckout: false,
                amount: 1
            }
        })
    }
    const data = await prisma.carts.findMany({
        where:{
            userId: userId,
            isCheckout: false
        }
    });
    return data;
}
async function getCartInfo(userId: string){
    const result = await prisma.carts.findMany({
        where:{
            userId: userId,
            isCheckout: false
        }
    })
    return result;
}
export default {addToCarts, getCartInfo};