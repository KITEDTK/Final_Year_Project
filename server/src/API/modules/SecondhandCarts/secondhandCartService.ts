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
          id: true,
          price: true,
          wardrobe: {
            select: {
              userId: true,
              clothDetails: {
                select: {
                  image1: true,
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
  const checkAmount =  await prisma.secondHand.findUnique({
    where:{
      id: secondhandId
    },
    select :{
      amount: true
    }
  });
  if(checkAmount && checkAmount.amount ){
    if(checkAmount.amount < amount){
      const error = new Error("not enough amount");
      throw error;
    }
  }
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
async function deleteItemIn2handCart(secondhandCartId: string){
  const data = await prisma.secondHandCart.findUnique({
    where:{
      id: secondhandCartId
    }
  })
  if(!data){
    throw 'err';
  }
  await prisma.secondHandCart.delete({
    where:{
      id: secondhandCartId
    }
  });
  if(!data.userId){
    throw 'err';
  }
  return fetch2handCartByUser(data.userId);
}
export default {fetch2handCartByUser, addItemTo2handCart, deleteItemIn2handCart}
