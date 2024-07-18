import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetch2handCartByUser(userId: string) {
  const data = await prisma.secondHandCart.findMany({
    where: {
      userId: userId,
    },
    include: {
      seconHands: {
        select: {
          wardrobe: {
            select: {
              clothDetails: {
                select: {
                  size: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                  color: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                  cloth: {
                    select: {
                      name: true,
                      price: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return data;
}
async function addItemTo2handCart(userId: string, secondhandId: string, amount: number){
  const checkExist = await prisma.secondHandCart.findFirst({
    where:{
      userId: userId,
      secondHandId: secondhandId,
    }
  });
  if(checkExist){
    await prisma.secondHandCart.update({
      where:{
        id: checkExist.id
      },
      data:{
        amount: checkExist.amount + amount
      }
    })
  }else{
    await prisma.secondHandCart.create({
      data:{
        userId: userId,
        secondHandId: secondhandId,
        amount: amount
      }
    })
  }
  return fetch2handCartByUser(userId);
}
export default {fetch2handCartByUser, addItemTo2handCart}
