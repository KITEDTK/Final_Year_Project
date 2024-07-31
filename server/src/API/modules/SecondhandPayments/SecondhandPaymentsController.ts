import { Request, Response } from "express";
import SecondhandPaymentService from "./SecondhandPaymentService";

async function create(req: Request, res: Response) {
  try {
    const result = await SecondhandPaymentService.create2handPayment(req.body);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function createGuestPayment(req: Request, res: Response) {
  try {
    const result = await SecondhandPaymentService.createGuest2handPayment(
      req.body
    );
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function getBeingOrderedItem(req: Request, res: Response){
  try {
    const {sellerId} = req.params;
    const result = await SecondhandPaymentService.fetchBeingOrderedItem(sellerId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
async function updateStatus(req: Request, res: Response){
  try {
    const {paymentDetailId} = req.params;
    const result = await SecondhandPaymentService.updateStatus(paymentDetailId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default {
  create,
  createGuestPayment,
  getBeingOrderedItem,
  updateStatus
};
