import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getInitProductPrice(year: number, month: number) {
  const startDate = new Date(year, month - 1, 1); // tháng trong JavaScript bắt đầu từ 0
  const endDate = new Date(year, month, 1); // ngày đầu tiên của tháng tiếp theo
  const result = await prisma.actionLogs.findMany({
    where: {
      createAt: {
        gte: startDate,
        lt: endDate,
      },
      actionName: "Thêm mới",
    },
    select: {
      id: true,
      amount: true,
      clothDetails: {
        select: {
          cloth: {
            select: {
              initPrice: true,
              name: true,
            },
          },
        },
      },
    },
  });
  const reduceClothes = await prisma.actionLogs.findMany({
    where: {
      createAt: {
        gte: startDate,
        lt: endDate,
      },
      actionName: "Bớt đi",
    },
    select: {
      id: true,
      amount: true,
      clothDetails: {
        select: {
          cloth: {
            select: {
              initPrice: true,
              name: true,
            },
          },
        },
      },
    },
  });
  const totalInitPrice = result.reduce((accumulator, item) => {
    if (item.clothDetails.cloth.initPrice) {
      const amount = item.amount * item.clothDetails.cloth.initPrice;
      return accumulator + amount;
    }
    return accumulator;
  }, 0);
  const totalReducePrice = reduceClothes.reduce((accumulator, item) => {
    if (item.clothDetails.cloth.initPrice) {
      const amount = item.amount * item.clothDetails.cloth.initPrice;
      return accumulator + amount;
    }
    return accumulator;
  }, 0);
  return totalInitPrice - totalReducePrice;
}
async function getPaymentPrice(year: number, month: number) {
  const startDate = new Date(year, month - 1, 1); // tháng trong JavaScript bắt đầu từ 0
  const endDate = new Date(year, month, 1); // ngày đầu tiên của tháng tiếp theo
  const result = await prisma.paymentDetails.findMany({
    where: {
      createAt: {
        gte: startDate,
        lt: endDate,
      },
    },
    select: {
      amount: true,
      clothDetail: {
        select: {
          cloth: {
            select: {
              price: true,
            },
          },
        },
      },
    },
  });
  const totalInitPrice = result.reduce((accumulator, item) => {
    if (item.clothDetail.cloth.price && item.amount) {
      const amount = item.amount * item.clothDetail.cloth.price;
      return accumulator + amount;
    }
    return accumulator;
  }, 0);
  return totalInitPrice;
}
async function topTenClothes(currentDateStart: Date, currentDateEnd: Date) {
  const data = await prisma.paymentDetails.groupBy({
    by: ["clothId"],
    _sum: {
      amount: true,
    },
    where: {
      createAt: {
        gte: currentDateStart, // Lớn hơn hoặc bằng ngày đầu tháng
        lt: currentDateEnd, // Nhỏ hơn ngày đầu của tháng sau
      },
    },
    orderBy: {
      _sum: {
        amount: "desc",
      },
    },
    take: 5,
  });

  const filter = await Promise.all(
    data.map(async (item) => {
      const clothDetails = await prisma.clothDetails.findUnique({
        where: {
          id: item.clothId,
        },
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
      });

      return {
        name: clothDetails,
        sum: item._sum.amount,
      };
    })
  );
  return filter;
}
async function getTopTenThisMonth() {
  const currentMonthStart = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ); // Ngày đầu tiên của tháng hiện tại
  const currentMonthEnd = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    1
  ); // Ngày đầu tiên của tháng tiếp theo
  return topTenClothes(currentMonthStart, currentMonthEnd);
}
async function getTopTenThisWeek() {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay(); // Lấy ngày trong tuần (0 là Chủ Nhật)
  const firstDayOfWeek = new Date(
    currentDate.setDate(currentDate.getDate() - currentDayOfWeek + 1)
  ); // Thứ Hai đầu tuần
  const lastDayOfWeek = new Date(
    currentDate.setDate(currentDate.getDate() - currentDayOfWeek + 7)
  ); // Chủ Nhật cuối tuần
  return topTenClothes(firstDayOfWeek, lastDayOfWeek);
}
export default {
  getInitProductPrice,
  getPaymentPrice,
  topTenClothes,
  getTopTenThisMonth,
  getTopTenThisWeek,
};
