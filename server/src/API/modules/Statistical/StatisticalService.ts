import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getInitProductPrice(year: number, month: number){
    const startDate = new Date(year, month - 1, 1); // tháng trong JavaScript bắt đầu từ 0
    const endDate = new Date(year, month, 1); // ngày đầu tiên của tháng tiếp theo
    const result = await prisma.actionLogs.findMany({
        where:{
            createAt:{
              gte: startDate,
              lt: endDate,
            }
          },
          select:{
            id: true,
            amount: true,
            clothDetails:{
                select:{
                    cloth:{
                        select: {
                            initPrice: true,
                            name: true
                        }
                    }
                }
            }
          }
    });
    const totalInitPrice = result.reduce((accumulator, item) => {
        if (item.clothDetails.cloth.initPrice) {
            const amount = item.amount * item.clothDetails.cloth.initPrice;
            return accumulator + amount;
        }
        return accumulator;
    }, 0);
    return totalInitPrice;
}
export default {
    getInitProductPrice
}