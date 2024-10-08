import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function fetchCartItem(userId: string) {
  const data = await prisma.carts.findMany({
    where: {
      userId: userId,
      isCheckout: false,
    },
    include: {
      clothDetails: {
        select: {
          image1: true,
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
          cloth: {
            select: {
              name: true,
              price: true,
            },
          },
        },
      },
    },
  });
  return data;
}
async function addToCarts(
  userId: string,
  clothDetailId: string,
  amount: number
) {
  const check = await prisma.carts.findFirst({
    where: {
      userId: userId,
      clothDetailId: clothDetailId,
      isCheckout: false,
    },
  });
  if (check) {
    await prisma.carts.update({
      where: {
        id: check.id,
      },
      data: {
        amount: check.amount + amount,
      },
    });
  } else {
    await prisma.carts.create({
      data: {
        userId: userId,
        clothDetailId: clothDetailId,
        isCheckout: false,
        amount: amount,
      },
    });
  }
  return fetchCartItem(userId);
}
async function getCartInfo(userId: string) {
  return fetchCartItem(userId);
}
async function deleteItemInCart(cartId: string, userId: string) {
  const check = await prisma.carts.findUnique({
    where: {
      id: cartId,
      userId: userId,
    },
  });
  if (check) {
    await prisma.carts.delete({
      where: {
        id: cartId,
        userId: userId,
      },
    });
  }
  return fetchCartItem(userId);
}
async function updateCartQuantity(cartId: string, amount: number) {
  const update = await prisma.carts.update({
    where: {
      id: cartId,
    },
    data: {
      amount: amount,
    },
  });
  return fetchCartItem(update.userId);
}
export default {
  addToCarts,
  getCartInfo,
  deleteItemInCart,
  updateCartQuantity,
};
