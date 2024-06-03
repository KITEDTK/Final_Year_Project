import { Request, Response } from "express";
import paymentsService from "./paymentsService";
async function paidByVnPay(req: Request, res: Response){
    try {
        const result = await paymentsService.vnpay(req);
        res.json(result);
      } catch (err) {
        console.log(err);
      }
}
async function returnVnpay(req: Request, res: Response){
  try {
    const result = await paymentsService.returnVnpay(req,res);
    if(result === 'success'){
      res.redirect(`http://localhost:3000/donepay/success`);
    }else{
      res.redirect('http://localhost:3000/donepay/fail');
    }
  } catch (err) {
    console.log(err);
  }
}
export default {paidByVnPay, returnVnpay}