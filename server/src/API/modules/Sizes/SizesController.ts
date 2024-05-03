import { Request, Response } from "express";
import SizesService from "./SizesService";

async function getAllSizes(req: Request, res: Response) {
    try {
      const result = await SizesService.getAllSizes();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  export default {getAllSizes};