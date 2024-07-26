import { Request, Response } from "express";
import secondhandCartService from "./secondhandCartService";

async function getCartByUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const result = await secondhandCartService.fetch2handCartByUser(userId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function addItemTo2handCart(req: Request, res: Response) {
  try {
    const { userId, secondhandId } = req.params;
    const { amount } = req.body;
    const result = await secondhandCartService.addItemTo2handCart(
      userId,
      secondhandId,
      amount
    );
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function deleteItem(req: Request, res: Response){
  try{
    const {secondhandCartId} = req.params;
    const result = await secondhandCartService.deleteItemIn2handCart(secondhandCartId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function getBeingOrderedItems(req: Request, res: Response){
  try{
    const {userId} = req.params;
    const result = await secondhandCartService.getBeingOrderedItem(userId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function updateStatus(req: Request, res: Response){
  try{
    const {cartId} = req.params;
    const result = await secondhandCartService.updateStatusCart(cartId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
export default {
  getCartByUser,
  addItemTo2handCart,
  deleteItem,
  getBeingOrderedItems,
  updateStatus
};
