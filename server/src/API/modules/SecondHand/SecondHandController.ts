import { Request, Response } from "express";
import SecondHandService from "./SecondHandService";

async function add(req: Request, res: Response) {
  try {
    const { clothDetailId, amount } = req.body;
    const result = await SecondHandService.create(
      clothDetailId,
      amount
    );
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAll(req: Request, res: Response){
    try {
        const result = await SecondHandService.allSecondHand();
        res.json(result);
      } catch (err) {
        console.log(err);
      }
}

export default{
    add, getAll
}
