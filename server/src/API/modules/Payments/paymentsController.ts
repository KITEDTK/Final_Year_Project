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
export default {paidByVnPay}