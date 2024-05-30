import { Router } from "express";
import paymentsController from "./paymentsController";

const router = Router();

router.post("/vnpay", paymentsController.paidByVnPay);
// Vui lòng tham khảo thêm tại code demo
export default router;
