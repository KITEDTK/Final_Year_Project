import { Request, Response } from "express";
import paymentsService from "./paymentsService";
let paymentInfoData: any = {};
async function paidByVnPay(req: Request, res: Response){
    try {
        const result = await paymentsService.vnpay(req);
        paymentInfoData = req.body;
        res.json(result);
      } catch (err) {
        console.log(err);
      }
}
async function returnVnpay(req: Request, res: Response){
  try {
    const result = await paymentsService.returnVnpay(req,res);
    if(result === 'success'){
      await paymentsService.createPayment(paymentInfoData);
      paymentInfoData = {};
      res.redirect(`http://localhost:3000/donepay/success`);
    }else{
      paymentInfoData = {};
      res.redirect('http://localhost:3000/donepay/fail');
    }
  } catch (err) {
    console.log(err);
  }
}
export default {paidByVnPay, returnVnpay}