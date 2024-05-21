import { Request, Response } from "express";
import ClothesService from "./ClothesService";

async function filterClothes(req: Request, res: Response) {
  try {
    const result = await ClothesService.filter(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function clothesToCSV(req: Request, res: Response){
  try {
    const result = await ClothesService.exportClothesToCSV();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAllClothes(req: Request, res: Response){
  try {
    const result = await ClothesService.getAllClothes();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default {filterClothes, clothesToCSV, getAllClothes};
