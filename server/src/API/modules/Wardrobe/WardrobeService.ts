import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllByUserId(userId: string) {
  const result = await prisma.wardrobe.findMany({
    where:{
      userId: userId,
      amount:{
        not: 0
      }
    },
    orderBy:{
      createAt: 'desc'
    },
    select:{
      id: true,
      amount: true,
      clothDetails:{
        select:{
          image1: true,
          cloth:{
            select: {
              name: true,
              price: true
            }
          },
          size:{
            select:{
              name: true
            }
          },
          color:{
            select:{
              name: true
            }
          }
        }
      }
    }
  });
  return result;
}
export default {
  getAllByUserId,
};
