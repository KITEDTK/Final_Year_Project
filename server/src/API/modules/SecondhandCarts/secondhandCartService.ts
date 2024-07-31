import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetch2handCartByUser(userId: string) {
  const data = await prisma.secondHandCart.findMany({
    where: {
      userId: userId,
      status: null
    },
    include: {
      seconHands: {
        select: {
          id: true,
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
async function getBeingOrderedItem(userId: string){
  const data = await prisma.secondHandCart.findMany({
    where:{
      secondhandPaymentId:{
        not: null
      },
      seconHands:{
        wardrobe:{
          userId: userId
        }
      }
    },
    select:{
      id: true,
      secondhandPayment:{
        select: {
          buyerId: true,
          address: true,
          phoneNumer: true, 
          status: true,
          buyerName: true,
          price: true
        }
      },
      seconHands:{
        select:{
          amount: true,
          wardrobe:{
            select:{
              clothDetails:{
                select:{
                  size:{
                    select:{
                      id: true,
                      name: true,
                    },
                  },
                  cloth:{
                    select: {
                      id: true,
                      name: true
                    }
                  },
                  color:{
                    select:{
                      id: true, 
                      name: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  return data;
}
async function updateStatusCart(cartId: string){
  const update = await prisma.secondHandCart.update({
    where:{
      id: cartId
    },
    data:{
      status: 'Đang vận chuyển'
    }
  });
  
  return update;
}
export default {fetch2handCartByUser, addItemTo2handCart, deleteItemIn2handCart, getBeingOrderedItem, updateStatusCart}
