import { Router } from "express";
import PaymentsController from "./paymentsController";

const router = Router();

router.post("/vnpay", PaymentsController.paidByVnPay);
router.get("/return_vnpay", PaymentsController.returnVnpay);
router.post("",PaymentsController.createPayment);
// Vui lòng tham khảo thêm tại code demo
export default router;
