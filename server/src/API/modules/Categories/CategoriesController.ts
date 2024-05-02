import { Request, Response } from "express";
import CategoriesService from "./CategoriesService";

async function getAllCategories(req: Request, res: Response) {
  try {
    const result = await CategoriesService.getAllCategories();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllCategories };
