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
async function getSingleCLothes(req: Request, res: Response){
  try {
    const {clothesId} = req.params;
    const result = await ClothesService.getSingleClothes(clothesId);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAllClothDetail(req: Request, res: Response){
  try {
    const result = await ClothesService.getAllClothesDetail();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
export default {filterClothes, clothesToCSV, getAllClothes, readExcelFile, getSingleCLothes, getAllClothDetail};
