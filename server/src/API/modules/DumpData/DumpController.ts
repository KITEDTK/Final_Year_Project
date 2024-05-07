import { Request, Response } from "express";
import DumpService from "./DumpService";

async function dumpCategories(req: Request, res: Response){
    try {
        const result = await DumpService.dumpCategories();
        res.send(result);
      } catch (err) {
        console.log(err);
    }
}
async function dumpClothes(req: Request, res: Response){
    try {
        const result = await DumpService.dumpClothes();
        res.send(result);
      } catch (err) {
        console.log(err);
    }
}
async function dumpClothDetails(req: Request, res: Response){
    try {
        const result = await DumpService.dumpClothDetails();
        res.send(result);
      } catch (err) {
        console.log(err);
    }
}
export default {dumpCategories, dumpClothes, dumpClothDetails};