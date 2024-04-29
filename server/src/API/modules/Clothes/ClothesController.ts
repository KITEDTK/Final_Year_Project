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
export default {filterClothes};
