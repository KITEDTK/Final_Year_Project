import { Request, Response } from "express";
import SecondHandService from "./SecondHandService";

async function add(req: Request, res: Response) {
  try {
    const { wardrobeId, amount } = req.body;
    const result = await SecondHandService.create(wardrobeId, amount);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAll(req: Request, res: Response) {
  try {
    const { page } = req.params;
    const result = await SecondHandService.allSecondHand(page);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function maxQuantity(req: Request, res: Response){
  try {
    const result = await SecondHandService.getMaxQuantity();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getSellingItems(req: Request, res: Response){
  try{
    const {userId} = req.params;
    const result = await SecondHandService.getSellingItems(userId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function pullSellingItems(req: Request, res: Response){
  try{
    const {secondhandId} = req.params;
    const result = await SecondHandService.pullSellingItems(secondhandId);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function getAllSecondhandItems(req: Request, res: Response){
  try{
    const result = await SecondHandService.getAll();
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
export default {
  add,
  getAll,
  maxQuantity,
  getSellingItems,
  pullSellingItems,
  getAllSecondhandItems
};
