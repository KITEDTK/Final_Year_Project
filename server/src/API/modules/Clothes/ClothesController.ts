import { Request, Response } from "express";
import ClothesService from "./ClothesService";
import fs from 'fs';
const excelToJson = require('convert-excel-to-json');

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
async function readExcelFile(req:Request, res: Response){
  try{
      const result = await ClothesService.readExcelFile(req.file)
      res.status(200).send(result)
    }
  catch(err){
      res.status(500);
  }
}
export default {filterClothes, clothesToCSV, getAllClothes, readExcelFile};
