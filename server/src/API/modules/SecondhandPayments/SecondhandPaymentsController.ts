import { Request, Response } from "express";
import SecondhandPaymentService from "./SecondhandPaymentService";

async function create(req: Request, res: Response){
    try{
        const {input} = req.body;
        const result = await SecondhandPaymentService.create2handPayment(input);
        res.json(result);
    }catch(err){
        console.log(err);
    }
}
export default {
    create
}