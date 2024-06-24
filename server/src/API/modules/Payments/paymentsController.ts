import { Request, Response } from "express";
import paymentsService from "./paymentsService";
let paymentInfoData: any = {};
async function paidByVnPay(req: Request, res: Response) {
  try {
    const result = await paymentsService.vnpay(req);
    paymentInfoData = req.body;
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function returnVnpay(req: Request, res: Response) {
  try {
    const result = await paymentsService.returnVnpay(req, res);
    if (result === "success") {
      await paymentsService.createPayment(paymentInfoData);
      paymentInfoData = {};
      res.redirect(`http://localhost:3000/donepay/success`);
    } else {
      paymentInfoData = {};
      res.redirect("http://localhost:3000/donepay/fail");
    }
  } catch (err) {
    console.log(err);
  }
}
async function getAllPayment(req: Request, res: Response) {
  try {
    const { page, payType } = req.params;
    const pageNumber = parseInt(page);
    const result = await paymentsService.getPayments(pageNumber, payType);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getQuantityPayment(req: Request, res: Response) {
  try {
    const { payType } = req.params;
    const result = await paymentsService.getQuantityPayment(payType);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getPaymentDetail(req: Request, res: Response) {
  try {
    const { paymentId } = req.params;
    const result = await paymentsService.getPaymentDetail(paymentId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function updatePaymentStatus(req: Request, res: Response) {
  try {
    const { status } = req.body;
    const { paymentId } = req.params;
    const result = await paymentsService.updateStatusPayment(paymentId, status);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default {
  paidByVnPay,
  returnVnpay,
  getAllPayment,
  getQuantityPayment,
  getPaymentDetail,
  updatePaymentStatus,
};
