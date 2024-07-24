import { PrismaClient } from "@prisma/client";
import { Create2HandPaymentInput } from "./SecondhandPaymentsType";
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
      status: status,
    },
  });
  await prisma.secondHandCart.updateMany({
    where: {
      id: {
        in: secondhandCartIds,
      },
    },
    data: {
      secondhandPaymentId: payment.id,
    },
  });
  return true;
}
export default {
  create2handPayment,
};
