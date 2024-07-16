import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(wardrobeId: string, amountToSell: number) {
  const result = await prisma.secondHand.create({
    data: {
      wardrobeId: wardrobeId,
      amount: amountToSell,
    },
  });
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
  return result;
}
async function allSecondHand(page: string) {
  const pageNumber = page ? parseInt(page, 10) : 0;
  const result = await prisma.secondHand.findMany({
    skip: pageNumber * 3,
    take: 3,
    include:{
      wardrobe:{
        include:{
          clothDetails:{
            select:{
              cloth:{
                select:{
                  id: true,
                  name: true,
                }
              },
              size: { select: { name: true } },
              color: { select: { name: true } },
            }
          }
        }
      }
    }
  });
  return result;
}
export default {
  create,
  allSecondHand,
};
