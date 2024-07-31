import { PrismaClient } from "@prisma/client";
import { Create2handGuestPaymentInput, Create2HandPaymentInput } from "./SecondhandPaymentsType";
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
  const filteredDetailData = secondhandCartInfo.map((item)=>{
    return {
      secondhandId: item.secondhandId,
      amount: item.amount,
      price: item.price || null,
      secondhandPaymentsId: payment.id,
      status: status
    }
  })
  const createPaymentDetail = await prisma.secondhandPaymentDetails.createMany({
    data: filteredDetailData
  });
  await prisma.secondHandCart.deleteMany({
    where:{
      userId: buyerId
    }
  });
  return createPaymentDetail;
}
async function createGuest2handPayment(input: Create2handGuestPaymentInput) {
  const {address, phoneNumber, buyerName, local2handCarts, status} = input;
 
  const payment = await prisma.secondhandPayments.create({
    data: {
      address: address,
      buyerName: buyerName,
      phoneNumer: phoneNumber,
    },
  });
  const cartData = local2handCarts.map((item)=>{
    return {
      secondhandId: item.secondhandId,
      amount: item.amount,
      price: item.price || null,
      secondhandPaymentsId: payment.id,
      status: status
    }
  });
  const createPaymentDetail = await prisma.secondhandPaymentDetails.createMany({
    data: cartData
  })
  return createPaymentDetail;
}
async function fetchBeingOrderedItem(sellerId: string) {
  const data = await prisma.secondhandPaymentDetails.findMany({
    where:{
      secondhand:{
        wardrobe:{
          userId: sellerId
        }
      }
    },
    select:{
      id: true,
      status: true,
      secondhandId: true,
      amount: true,
      price: true,
      secondhandPayments:{
        select:{
          id: true,
          buyerId: true,
          address: true,
          phoneNumer: true,
          buyerName: true
        }
      },
      secondhand:{
        select:{
          wardrobe:{
            select:{
              clothDetails:{
                select:{
                  id: true,
                  cloth:{
                    select:{
                      name: true
                    }
                  },
                  size:{
                    select:{
                      name: true,
                    }
                  },
                  color:{
                    select: {
                      name: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  return data;
}
async function updateStatus(paymentId: string){
  const data = await prisma.secondhandPaymentDetails.update({
    where:{
      id: paymentId
    },
    data:{
      status: 'Đang vận chuyển'
    }
  })
}
export default {
  create2handPayment,
  createGuest2handPayment,
  fetchBeingOrderedItem,
  updateStatus
};
