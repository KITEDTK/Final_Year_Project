import { Router } from "express";
import SecondhandPaymentsController from "./SecondhandPaymentsController";

const router =  Router();

router.post("/", SecondhandPaymentsController.create);
router.post("/guest", SecondhandPaymentsController.createGuestPayment);

export default router;