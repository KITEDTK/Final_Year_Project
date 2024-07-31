import { PrismaClient } from "@prisma/client";
import { Create2handGuestPaymentInput, Create2HandPaymentInput } from "./SecondhandPaymentsType";
const prisma = new PrismaClient();

async function create2handPayment(input: Create2HandPaymentInput) {
  const {
    buyerId,
    address,
    buyerName,
    price,
    phoneNumber,
    status,
    secondhandCartIds,
  } = input;
  const payment = await prisma.secondhandPayments.create({
    data: {
      ...(buyerId !== undefined ? { buyerId: buyerId } : {}),
      address: address,
      buyerName: buyerName,
      ...(price ? { price: price } : {}),
      phoneNumer: phoneNumber,
    },
  });
  return payment;
}
async function createGuest2handPayment(input: Create2handGuestPaymentInput) {
  const {address, phoneNumber, buyerName, local2handCarts} = input;
 
  const payment = await prisma.secondhandPayments.create({
    data: {
      address: address,
      buyerName: buyerName,
      phoneNumer: phoneNumber,
    },
  });
  const cartData = local2handCarts.map((item)=>{
    return {
      secondHandId: item.secondhandId,
      amount: item.amount,
      secondhandPaymentId: payment.id
    }
  });
  await prisma.secondHandCart.createMany({
    data: cartData
  });
  return true;
}
export default {
  create2handPayment,
  createGuest2handPayment
};
