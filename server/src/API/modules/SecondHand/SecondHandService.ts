import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(wardrobeId: string, amountToSell: number, price: number) {
  const checkExistSecondhand = await prisma.secondHand.findFirst({
    where: {
      wardrobeId: wardrobeId,
    },
  });
  if (checkExistSecondhand && checkExistSecondhand.price === price) {
    await prisma.secondHand.update({
      where: {
        id: checkExistSecondhand.id,
      },
      data: {
        amount: checkExistSecondhand.amount + amountToSell,
      },
    });
  } else {
    await prisma.secondHand.create({
      data: {
        wardrobeId: wardrobeId,
        amount: amountToSell,
        price: price
      },
    });
  }
  const amountWardrobe = await prisma.wardrobe.findUnique({
    where: {
      id: wardrobeId,
    },
    select: {
      amount: true,
    },
  });
  const newAmonut = amountWardrobe ? amountWardrobe.amount - amountToSell : 0;
  await prisma.wardrobe.update({
    where: {
      id: wardrobeId,
    },
    data: {
      amount: newAmonut,
    },
  });
  return true;
}
async function allSecondHand(page: string) {
  const pageNumber = page ? parseInt(page, 10) : 0;
  const result = await prisma.secondHand.findMany({
    skip: pageNumber * 3,
    take: 3,
    include: {
      wardrobe: {
        include: {
          users:{
            select:{
              fullname: true
            }
          },
          clothDetails: {
            select: {
              image1: true,
              cloth: {
                select: {
                  id: true,
                  name: true,
                },
              },
              size: { select: { id: true, name: true } },
              color: { select: { id: true, name: true } },
            },
          },
        },
      },
    },
  });
  return result;
}
async function getMaxQuantity() {
  const result = await prisma.secondHand.findMany({});
  return result.length;
}
async function getSellingItems(userId: string) {
  const data = await prisma.secondHand.findMany({
    where: {
      wardrobe: {
        userId: userId,
      },
    },
    include: {
      wardrobe: {
        select: {
          clothDetails: {
            select: {
              cloth: {
                select: {
                  name: true,
                },
              },
              size: {
                select: {
                  name: true,
                },
              },
              color: {
                select: {
                  name: true,
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
async function pullSellingItems(secondhandId: string){
  const data = await prisma.secondHand.findUnique({
    where:{
      id: secondhandId
    },
    include:{
      wardrobe:{
        select:{
          amount: true
        }
      }
    }
  });
  if(!data){
    throw 'err';
  }
  await prisma.wardrobe.update({
    where:{
      id: data.wardrobeId
    },
    data:{
      amount: data.wardrobe.amount + data.amount
    }
  });
  await prisma.secondHandCart.deleteMany({
    where:{
      secondHandId: secondhandId
    }
  });
  await prisma.secondhandPaymentDetails.deleteMany({
    where:{
      secondhandId: secondhandId
    }
  })
  await prisma.secondHand.delete({
    where:{
      id: secondhandId
    }
  });
  return true;
}
async function getAll(){
  const result = await prisma.secondHand.findMany({
    include: {
      wardrobe: {
        include: {
          clothDetails: {
            select: {
              cloth: {
                select: {
                  id: true,
                  name: true,
                },
              },
              size: { select: { id: true, name: true } },
              color: { select: { id: true, name: true } },
            },
          },
        },
      },
    },
  });
  return result;
}
export default {
  create,
  getAll,
  allSecondHand,
  getMaxQuantity,
  getSellingItems,
  pullSellingItems
};
