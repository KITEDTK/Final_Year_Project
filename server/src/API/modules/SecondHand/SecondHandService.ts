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
async function allSecondHand() {
  const result = await prisma.secondHand.findMany();
  return result;
}

export default {
  create,
  allSecondHand,
};
