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
    select:{
      id: true,
      amount: true,
      clothDetails:{
        select:{
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
