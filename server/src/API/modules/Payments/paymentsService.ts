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
async function createPayment(input: any) {
  const {
    userId,
    voucherId,
    total,
    fullname,
    address,
    phoneNumber,
    email,
    clothDetail,
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
  return await prisma.paymentDetails.createMany({
    data: data,
  });
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
      clothDetail:{
        select:{
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
    // xử lí logic vận chuyển ở đây
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
    },
    select:{
      status: true,
      paymentDetails:{
        select:{
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
export default {
  vnpay,
  updateStatusPayment,
  createPayment,
  returnVnpay,
  getPayments,
  getQuantityPayment,
  getPaymentDetail,
  getHistoryPayment
};
