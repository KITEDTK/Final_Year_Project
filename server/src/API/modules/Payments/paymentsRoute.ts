import { Router } from "express";
import PaymentsController from "./paymentsController";

const router = Router();

router.post("/vnpay", PaymentsController.paidByVnPay);
router.get("/return_vnpay", PaymentsController.returnVnpay);
// Vui lòng tham khảo thêm tại code demo
export default router;
