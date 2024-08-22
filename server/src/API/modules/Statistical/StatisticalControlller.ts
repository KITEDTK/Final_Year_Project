import { Request, Response } from "express";
import StatisticalService from "./StatisticalService";

async function getInitProductPrice(req: Request, res: Response){
    try {
        const {year, month} = req.body;
        const result = await StatisticalService.getInitProductPrice(year, month);
        res.json(result);
      } catch (err) {
        console.log(err);
      }
}
async function getPaymentPrice(req: Request, res: Response){
  try{
    const {year, month} = req.body;
    const result = await StatisticalService.getPaymentPrice(year, month);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
export default {
    getInitProductPrice,
    getPaymentPrice
}