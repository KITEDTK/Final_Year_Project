import { Router } from "express";
import PaymentsController from "./paymentsController";

const router = Router();

router.post("/vnpay",  PaymentsController.paidByVnPay);

router.get("/return_vnpay", PaymentsController.returnVnpay);

export default router;
