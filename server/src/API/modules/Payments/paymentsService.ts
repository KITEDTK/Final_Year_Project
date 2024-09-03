import { PrismaClient } from "@prisma/client";
import { generateURL } from "../../../utils/vnpay";
import { uuid } from "uuidv4";
import { sortObject } from "../../../utils/sortObject";

const prisma = new PrismaClient();

async function vnpay(req: any) {
  const { total } = req.body;
  const uniqueId = uuid();
  const url = generateURL(req, uniqueId, total);
  return url;
}
async function createPaymentVNpay(input: any) {
  const {
    userId,
    voucherId,
    total,
    fullname,
    address,
    phoneNumber,
    email,
    clothDetail
  } = input;
  const createPayment = await prisma.payments.create({
    data: {
      ...(userId ? { userId: userId } : {}),
      ...(voucherId ? { voucherId: voucherId } : {}),
      total: total,
      fullname: fullname,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
      isPaid: true,
      isEnable: true,
      vnpay: true,
      onlinePay: true,
      status: 'Chưa duyệt đơn'
    },
  });
  const data: any = [];
  clothDetail.forEach((item: any) => {
    data.push({
      paymentId: createPayment.id,
      clothId: item.id,
      amount: item.amount,
    });
  });
  await prisma.paymentDetails.createMany({
    data: data,
  });
  return createPayment.id;
}
async function createPaymentPayWhenReceive(input: any) {
  const {
    userId,
    voucherId,
    total,
    fullname,
    address,
    phoneNumber,
    email,
    clothDetail
  } = input;
  const createPayment = await prisma.payments.create({
    data: {
      ...(userId ? { userId: userId } : {}),
      ...(voucherId ? { voucherId: voucherId } : {}),
      total: total,
      fullname: fullname,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
      isPaid: false,
      isEnable: true,
      vnpay: false,
      onlinePay: false,
      status: 'Chưa duyệt đơn'
    },
  });
  const data: any = [];
  clothDetail.forEach((item: any) => {
    data.push({
      paymentId: createPayment.id,
      clothId: item.id,
      amount: item.amount,
    });
  });
  await prisma.paymentDetails.createMany({
    data: data,
  });
  return createPayment.id;
}
async function returnVnpay(req: any, res: any) {
  let vnp_Params = req.query;

  let secureHash = vnp_Params["vnp_SecureHash"];

  delete vnp_Params["vnp_SecureHash"];
  delete vnp_Params["vnp_SecureHashType"];

  vnp_Params = sortObject(vnp_Params);

  let tmnCode = "KHBLVREA";
  let secretKey = "XWSSNAPCHGECJYUNQEOLBAESMEPOOGDR";

  let querystring = require("qs");
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");

  if (secureHash === signed && vnp_Params["vnp_TransactionStatus"] === "00") {
    //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
    return "success";
  } else if (vnp_Params["vnp_TransactionStatus"] === "02") {
    return "fail";
  }
}
async function getPayments(page: number, payType: string) {
  let paymentType: boolean;
  paymentType = payType === "onlinePay" ? true : false;
  const result = await prisma.payments.findMany({
    skip: page * 5,
    take: 5,
    where: {
      onlinePay: paymentType,
    },
    orderBy:{
      createAt: 'desc'
    }
  });
  return result;
}
async function getQuantityPayment(payType: string) {
  let paymentType: boolean;
  paymentType = payType === "onlinePay" ? true : false;
  const result = await prisma.payments.findMany({
    where: {
      onlinePay: paymentType,
    },
  });
  return result.length;
}
async function getPaymentDetail(paymentId: string){
  const result = await prisma.paymentDetails.findMany({
    where:{
        paymentId: paymentId
    },
    select:{
      id: true,
      amount: true,
      payment: true,
      clothDetail:{
        select:{
          id: true,
          codeBar: true,
          amount: true,
          cloth:{
            select:{
              name: true
            }
          },
          color:{
            select:{
              id: true,
              name: true
            }
          },
          size:{
            select:{
              id: true,
              name: true
            }
          }
        }
      }
    }
  });
  return result;
}
async function updateStatusPayment(paymentId: string, status: string){
  if(status === 'Đang vận chuyển'){
    const dataPayment =  await prisma.paymentDetails.findMany({
      where:{
        paymentId: paymentId
      }
    });
    dataPayment.forEach(async (item)=>{
      const data = await prisma.clothDetails.findUnique({
        where:{
          id: item.clothId
        }
      });
      if(data && item.amount){
        await prisma.clothDetails.update({
          where:{
            id : item.clothId
          },
          data:{
            amount: data?.amount - item.amount
          }
        });
        await prisma.actionLogs.create({
          data:{
            actionName: "Bán được",
            clothDetailId: item.clothId,
            amount: item.amount
          }
        })
      }else{
        throw 'err';
      }
    });
  }
  if(status === 'Khách đã nhận'){
    const checkExistUser = await prisma.payments.findUnique({
      where:{
        id: paymentId
      }
    });
    if (checkExistUser && checkExistUser.userId !== null) {
      const allData = await prisma.paymentDetails.findMany({
        where: {
          paymentId: paymentId,
        }
      });
    
      const data: any = allData
        .map(item => ({
          clothDetailId: item.clothId,
          amount: item.amount,
          userId: checkExistUser.userId
        }))
        .filter(item => item.userId !== null);
      await prisma.wardrobe.createMany({
        data: data
      });
    }
  }
  const update = await prisma.payments.update({
    where:{
      id: paymentId
    },
    data:{
      status: status
    }
  })
  return update;
}
async function getHistoryPayment(userId: string){
  const result = await prisma.payments.findMany({
    where:{
      userId: userId,
      paymentDetails:{
        some:{
          isEnable: true
        }
      }
    },
    orderBy:{
      createAt: 'desc'
    },
    select:{
      id: true,
      status: true,
      paymentDetails:{
        select:{
          id: true,
          amount: true,
          clothDetail:{
            select:{
              cloth:{
                select:{
                  name: true,
                  price: true
                }
              },
              size:{
                select: {
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
      }
    }
  })
  return result;
}
async function getSinglePayment (paymentId: string){
  const result = await prisma.payments.findUnique({
    where:{
      id: paymentId
    }
  });
  return result;
}
async function barChartMonth (year: number, month: number){
  const startDate = new Date(year, month - 1, 1); // tháng trong JavaScript bắt đầu từ 0
  const endDate = new Date(year, month, 1); // ngày đầu tiên của tháng tiếp theo
  const result = await prisma.payments.findMany({
    where:{
      createAt:{
        gte: startDate,
        lt: endDate,
      }
    },select:{
      paymentDetails:{
        select:{
          
        }
      }
    }
  });
  return result;
}
async function deletePaymentDetail(paymentDetailId: string){
  const data = await prisma.paymentDetails.delete({
    where:{
      id: paymentDetailId
    }
  });
  const checkExistPayment = await prisma.paymentDetails.findFirst({
    where:{
      paymentId: data.paymentId,
      isEnable: true
    }
  });
  if(!checkExistPayment){
    await prisma.payments.update({
      where:{
        id: data.paymentId
      },
      data:{
        status: 'Khách đã hủy đơn'
      }
    });
  }else{
    const pricePayment = await prisma.paymentDetails.findMany({
      where:{
        paymentId: data.paymentId
      },
      select:{
        amount: true,
        clothDetail:{
          select:{
            cloth:{
              select:{
                price: true
              }
            }
          }
        }
      }
    });
    const newPricePayment = pricePayment.reduce((accumulator, currentValue) => {
      const clothPrice = currentValue?.clothDetail?.cloth?.price ?? 0;
      const amount = currentValue?.amount ?? 0;
      return accumulator + amount * clothPrice;
    }, 0);
    await prisma.payments.update({
      where:{
        id: data.paymentId
      },
      data:{
        total: newPricePayment
      }
    });
  }
  return data.paymentId;
}
export default {
  barChartMonth,
  createPaymentPayWhenReceive,
  vnpay,
  getSinglePayment,
  updateStatusPayment,
  createPaymentVNpay,
  returnVnpay,
  getPayments,
  getQuantityPayment,
  getPaymentDetail,
  getHistoryPayment,
  deletePaymentDetail
};
