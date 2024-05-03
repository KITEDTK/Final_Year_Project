import { Request, Response } from "express";
import ColorsService from "./ColorsService";

async function getAllColors(req: Request, res: Response){
    try {
        const result = await ColorsService.getAllColors();
        res.send(result);
      } catch (err) {
        console.log(err);
    }
}
export default {getAllColors}