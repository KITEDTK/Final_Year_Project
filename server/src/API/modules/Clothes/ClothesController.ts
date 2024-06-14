import { Request, Response } from "express";
import ClothesService from "./ClothesService";

async function filterClothes(req: Request, res: Response) {
  try {
    const {page, rootCategoryId} = req.params;
    const result = await ClothesService.getClothesByRootCategory(rootCategoryId, page);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function clothesToCSV(req: Request, res: Response) {
  try {
    const result = await ClothesService.exportClothesToCSV();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAllClothes(req: Request, res: Response) {
  try {
    const {page} = req.params;
    const result = await ClothesService.getAllClothes(page);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function readExcelFile(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json("No file");
    }
    const filePath = "uploads/" + req.file.filename;
    const data = await ClothesService.readExcelFile(filePath);
    res.status(200).json(data);
  } catch (err) {
    console.error("Error reading Excel file:", err);
    res.status(500).json("Internal server error");
  }
}
async function getSingleCLothes(req: Request, res: Response) {
  try {
    const { clothesId } = req.params;
    const result = await ClothesService.getSingleClothes(clothesId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAllClothDetail(req: Request, res: Response) {
  try {
    const result = await ClothesService.getAllClothesDetail();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function addCommentInClothes(req: Request, res: Response) {
  try {
    const { clothesId, userId } = req.params;
    const { content } = req.body;
    const result = await ClothesService.addComment(clothesId, userId, content);
    res.send(result);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
async function getSingleClothesAdmin(req: Request, res: Response){
  try{
    const {clothesId} = req.params;
    const result = await ClothesService.getSingleClothesAdmin(clothesId);
    res.send(result);
  }catch(err){
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
async function getAllClothesAdmin(req: Request, res: Response){
  try {
    const result = await ClothesService.getAllClothesAdmin();
    res.json(result);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
async function getMaxQuantityClothes(req: Request, res: Response){
  try {
    const result = await ClothesService.getMaxQuantityClothes();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getMaxQuantityClothesByRootCategory(req: Request, res: Response){
  try {
    const {categoryId} = req.params;
    const result = await ClothesService.getMaxQuantityClothesByRootCategory(categoryId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default {
  getMaxQuantityClothesByRootCategory,
  getMaxQuantityClothes,
  getAllClothesAdmin,
  filterClothes,
  clothesToCSV,
  getAllClothes,
  readExcelFile,
  getSingleCLothes,
  getAllClothDetail,
  addCommentInClothes,
  getSingleClothesAdmin
};
