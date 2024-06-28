import { Request, Response } from "express";
import paymentsService from "./paymentsService";
let paymentInfoData: any = {};
import { io } from "../../..";
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
      const paymentId = await paymentsService.createPaymentVNpay(paymentInfoData);
      paymentInfoData = {};
      io.emit('payment_create', {paymentId: paymentId});
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
async function getHistoryPayment(req: Request, res: Response){
  try{
    const {userId} = req.params;
    const result = await paymentsService.getHistoryPayment(userId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function getSinglePayment(req: Request, res: Response){
  try{
    const {paymentId} = req.params;
    const result = await paymentsService.getSinglePayment(paymentId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function returnPayWhenRecived(req: Request, res: Response){
  try {
      const paymentId = await paymentsService.createPaymentPayWhenReceive(req.body);
      io.emit('payment_create', {paymentId: paymentId});
      //res.redirect(`http://localhost:3000/donepay/success`);
      res.json(`http://localhost:3000/donepay/success`);
  } catch (err) {
    console.log(err);
  }
}
async function barChartMonth(req: Request, res: Response){
  try {
    const {year, month} = req.body;
    const result = await paymentsService.barChartMonth(year, month);
    res.json(result);
} catch (err) {
  console.log(err);
}
}
export default {
  barChartMonth,
  returnPayWhenRecived,
  paidByVnPay,
  returnVnpay,
  getSinglePayment,
  getAllPayment,
  getQuantityPayment,
  getPaymentDetail,
  updatePaymentStatus,
  getHistoryPayment,
};
