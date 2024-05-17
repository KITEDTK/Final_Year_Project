import { Request, Response } from "express";
import CartsService from "./CartsService";

async function addItemToCarts(req: Request, res: Response){
    try {
        const {clothDetailId} = req.body;
        const {userId} = req.params;
        const result = await CartsService.addToCarts(userId, clothDetailId);
        res.json(result);
      } catch (err) {
        console.log(err);
      }
}
async function getCartInfo(req: Request, res: Response){
  try {
    const {userId} = req.params;
    const result = await CartsService.getCartInfo(userId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default {addItemToCarts, getCartInfo}