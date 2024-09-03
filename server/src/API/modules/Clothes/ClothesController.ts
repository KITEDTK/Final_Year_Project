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
    res.json(result);
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
async function updateSingleClothes(req: Request, res: Response){
  try {
    const {clothesId} = req.params;
    const result = await ClothesService.updateSingleClothesInfo(clothesId,req.body);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function generateBarcode(req: Request, res: Response){
  try {
    const {oldBarcode} = req.body;
    const result = await ClothesService.generateBarcode(oldBarcode);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function createClothes(req: Request, res: Response){
  try {
    const result = await ClothesService.createClothes(req.body, req);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function createClothDetails(req: Request, res: Response){
  try {
    const {image1Name, image2Name, image3Name,amount, ...rest  } = req.body;
    const quantity = parseInt(amount,10);
    const data = {
      ...rest,
      image1: image1Name,
      image2: image2Name,
      image3: image3Name,
      amount: quantity
    }
    const {clothesId} = req.params;
    const result = await ClothesService.createClothesDetail(clothesId, data);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function searching(req: Request, res: Response){
  try {
    const {text} = req.body;
    const result = await ClothesService.searching(text);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function addClothDetailQuantity(req: Request, res: Response){
  try {
    const {quantity} = req.body;
    const {clothDetailId} = req.params;
    const result = await ClothesService.addQuantity(clothDetailId, quantity);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function updateClothDetailQuantity(req: Request, res: Response){
  try {
    const {quantity} = req.body;
    const {clothDetailId} = req.params;
    const result = await ClothesService.updateQuantity(clothDetailId, quantity);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getByBarcode(req: Request, res: Response){
  try{
    const {barcode} = req.body;
    const result = await ClothesService.getByBarcode(barcode);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function refund(req: Request, res: Response){
  try{
    const {clothDetailId, amount} = req.body;
    const result = await ClothesService.refund(clothDetailId,amount);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
async function getQuantityDetail(req: Request, res: Response){
  try{
    const {clothDetailId} = req.params;
    const result = await ClothesService.getQuantityClothDetail(clothDetailId);
    res.json(result);
  }catch(err){
    console.log(err)
  }
}
export default {
  addClothDetailQuantity,
  updateClothDetailQuantity,
  searching,
  createClothDetails,
  getMaxQuantityClothesByRootCategory,
  createClothes,
  generateBarcode,
  getMaxQuantityClothes,
  getAllClothesAdmin,
  getByBarcode,
  filterClothes,
  clothesToCSV,
  getAllClothes,
  readExcelFile,
  getSingleCLothes,
  getAllClothDetail,
  addCommentInClothes,
  getSingleClothesAdmin,
  updateSingleClothes,
  refund,
  getQuantityDetail
};
