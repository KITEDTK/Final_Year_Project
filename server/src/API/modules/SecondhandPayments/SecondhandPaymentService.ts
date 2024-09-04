import { PrismaClient } from "@prisma/client";
import {
  Create2handGuestPaymentInput,
  Create2HandPaymentInput,
} from "./SecondhandPaymentsType";
const prisma = new PrismaClient();

async function create2handPayment(input: Create2HandPaymentInput) {
  const {
    buyerId,
    address,
    buyerName,
    phoneNumber,
    status,
    secondhandCartInfo,
  } = input;
  const payment = await prisma.secondhandPayments.create({
    data: {
      ...(buyerId !== undefined ? { buyerId: buyerId } : {}),
      address: address,
      buyerName: buyerName,
      phoneNumer: phoneNumber,
    },
  });
  const filteredDetailData = secondhandCartInfo.map((item) => {
    return {
      secondhandId: item.secondhandId,
      amount: item.amount,
      price: item.price || null,
      secondhandPaymentsId: payment.id,
      status: status,
    };
  });
  const createPaymentDetail = await prisma.secondhandPaymentDetails.createMany({
    data: filteredDetailData,
  });
  await prisma.secondHandCart.deleteMany({
    where: {
      userId: buyerId,
    },
  });
  return createPaymentDetail;
}
async function createGuest2handPayment(input: Create2handGuestPaymentInput) {
  const { address, phoneNumber, buyerName, local2handCarts, status } = input;

  const payment = await prisma.secondhandPayments.create({
    data: {
      address: address,
      buyerName: buyerName,
      phoneNumer: phoneNumber,
    },
  });
  const cartData = local2handCarts.map((item) => {
    return {
      secondhandId: item.secondhandId,
      amount: item.amount,
      price: item.price || null,
      secondhandPaymentsId: payment.id,
      status: status,
    };
  });
  const createPaymentDetail = await prisma.secondhandPaymentDetails.createMany({
    data: cartData,
  });
  return createPaymentDetail;
}
async function fetchBeingOrderedItem(sellerId: string) {
  const data = await prisma.secondhandPaymentDetails.findMany({
    where: {
      secondhand: {
        wardrobe: {
          userId: sellerId,
        },
      },
    },
    select: {
      id: true,
      status: true,
      secondhandId: true,
      amount: true,
      price: true,
      secondhandPayments: {
        select: {
          id: true,
          buyerId: true,
          address: true,
          phoneNumer: true,
          buyerName: true,
        },
      },
      secondhand: {
        select: {
          price: true,
          wardrobe: {
            select: {
              clothDetails: {
                select: {
                  image1: true,
                  id: true,
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
      },
    },
  });
  return data;
}
async function updateStatus(paymentDetailId: string, status: string) {
  const secondhandPaymentDetail =
    await prisma.secondhandPaymentDetails.findUnique({
      where: {
        id: paymentDetailId,
      },
    });
  const secondhand = await prisma.secondHand.findUnique({
    where: {
      id: secondhandPaymentDetail?.secondhandId,
    },
  });
  if (status === "Đang vận chuyển" && secondhand && secondhandPaymentDetail) {
    if (secondhand.amount < secondhandPaymentDetail.amount) {
      const error = new Error("Không đủ số lượng trong tủ");
      throw error;
    } else {
      await prisma.secondHand.update({
        where: {
          id: secondhand.id,
        },
        data: {
          amount: secondhand.amount - secondhandPaymentDetail.amount,
        },
      });
      return await prisma.secondhandPaymentDetails.update({
        where: {
          id: paymentDetailId,
        },
        data: {
          status: status,
        },
      });
    }
  }
  if (status === "Chưa thanh toán" && secondhand && secondhandPaymentDetail) {
    await prisma.secondHand.update({
      where: {
        id: secondhand.id,
      },
      data: {
        amount: secondhand.amount + secondhandPaymentDetail.amount,
      },
    });
    return await prisma.secondhandPaymentDetails.update({
      where: {
        id: paymentDetailId,
      },
      data: {
        status: status,
      },
    });
  }
}
async function getOrdering(userId: string) {
  const data = await prisma.secondhandPayments.findMany({
    where: {
      buyerId: userId,
      SecondhandPaymentDetails: {
        some: {
          status: "Đang vận chuyển",
        },
      },
    },
    select: {
      id: true,
      buyerId: true,
      SecondhandPaymentDetails: {
        select: {
          id: true,
          amount: true,
          status: true,
          secondhand: {
            select: {
              price: true,
              wardrobe: {
                select: {
                  userId: true,
                  clothDetails: {
                    select: {
                      image1: true,
                      cloth: {
                        select: {
                          name: true,
                        },
                      },
                      color: {
                        select: {
                          name: true,
                        },
                      },
                      size: {
                        select: {
                          name: true,
                        },
                      },
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
  const filterData = data.map((item) => {
    const filteredDetails = item.SecondhandPaymentDetails.map((detail) => {
      if (detail.status === "Đang vận chuyển") {
        return detail;
      } else {
        return null;
      }
    }).filter((itemm) => itemm !== null);
    return {
      ...item,
      SecondhandPaymentDetails: filteredDetails,
    };
  });
  return filterData;
}
async function passSecondhandItems(
  buyerId: string,
  secondhandPaymentDetailId: string
) {
  const secondhandPaymentDetailInfo =
    await prisma.secondhandPaymentDetails.findUnique({
      where: {
        id: secondhandPaymentDetailId,
      },
      include: {
        secondhand: {
          select: {
            amount: true,
            wardrobe: {
              select: {
                clothDetailId: true,
              },
            },
          },
        },
      },
    });
  if (!secondhandPaymentDetailInfo) {
    throw "err";
  }
  const checkExistInWardrobe = await prisma.wardrobe.findFirst({
    where: {
      userId: buyerId,
      clothDetailId:
        secondhandPaymentDetailInfo.secondhand.wardrobe.clothDetailId,
    },
  });
  if (checkExistInWardrobe) {
    await prisma.wardrobe.update({
      where: {
        id: checkExistInWardrobe.id,
      },
      data: {
        amount:
          checkExistInWardrobe.amount + secondhandPaymentDetailInfo.amount,
      },
    });
    await prisma.secondhandPaymentDetails.delete({
      where: {
        id: secondhandPaymentDetailId,
      },
    });
  } else {
    await prisma.wardrobe.create({
      data: {
        userId: buyerId,
        clothDetailId:
          secondhandPaymentDetailInfo.secondhand.wardrobe.clothDetailId,
        amount: secondhandPaymentDetailInfo.amount,
      },
    });
    await prisma.secondhandPaymentDetails.delete({
      where: {
        id: secondhandPaymentDetailId,
      },
    });
  }
  return true;
}
export default {
  create2handPayment,
  createGuest2handPayment,
  fetchBeingOrderedItem,
  updateStatus,
  getOrdering,
  passSecondhandItems,
};
