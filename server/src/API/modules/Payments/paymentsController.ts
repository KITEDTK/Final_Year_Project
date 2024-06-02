import { Request, Response, NextFunction } from "express";
import paymentsService from "./paymentsService";
import { returnUrl } from "../../../utils/vnpay";
let paymentData: string = '';
async function paidByVnPay(req: Request, res: Response){
    try {
        const result = await paymentsService.vnpay(req);
        paymentData = result;
        res.json(result);
      } catch (err) {
        console.log(err);
      }
}
async function returnVnpay(req: Request, res: Response){
  try {
    const result = await paymentsService.returnVnpay(req,res);
    //Check trùng paymentId thì không thêm vào nữa
    // if(result === 'success'){
    //   res.redirect(`http://localhost:3000/donepay/success/${paymentData}`);
    // }else{
    //   res.redirect('http://localhost:3000/donepay/fail');
    // }
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function createPayment(req: Request, res: Response){
  try {
    const result = await paymentsService.createPayment(req);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default {paidByVnPay, returnVnpay, createPayment}