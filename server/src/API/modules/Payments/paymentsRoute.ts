import { Router } from "express";
import PaymentsController from "./paymentsController";

const router = Router();

router.get("/return_vnpay", PaymentsController.returnVnpay);

router.get("/:payType/page/:page", PaymentsController.getAllPayment);

router.post("/vnpay", PaymentsController.paidByVnPay);

router.get("/:payType/quantity", PaymentsController.getQuantityPayment);

router.get("/:paymentId/paymentDetails", PaymentsController.getPaymentDetail);

router.patch("/:paymentId/status", PaymentsController.updatePaymentStatus);

router.get("/history/:userId/users", PaymentsController.getHistoryPayment);
export default router;
