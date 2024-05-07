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
async function getCategoryById(req: Request, res: Response){
  try {
    const {categoryId} = req.params;
    const result = await CategoriesService.getTreeCategoriesById(categoryId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getChildCategory(req:Request,res: Response){
  try {
    const {categoryId} = req.params;
    const result = await CategoriesService.getChildCategories(categoryId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default { getAllCategories, getCategoryById, getChildCategory };
