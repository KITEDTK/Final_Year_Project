import { Request, Response, NextFunction } from "express";
import paymentsService from "./paymentsService";
import { returnUrl } from "../../../utils/vnpay";
import axios from "axios";
let paymentData: any = {};
async function paidByVnPay(req: Request, res: Response){
    try {
        const result = await paymentsService.vnpay(req);
        res.json(result);
        returnVnpay(result.data, req, res);
      } catch (err) {
        console.log(err);
      }
}
async function returnVnpay(data: any, req: Request, res: Response){
  try {
    const result = await paymentsService.returnVnpay(req,res);
    if(result === 'success'){
      await axios.post('http://localhost:4000/payment',data);
      res.redirect(`http://localhost:3000/donepay/success`);
    }else{
      res.redirect('http://localhost:3000/donepay/fail');
    }
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