import { Router } from "express";
import StatisticalControlller from "./StatisticalControlller";

const router = Router();

router.post("/initProductPrice",StatisticalControlller.getInitProductPrice);
router.post("/paymentPrice", StatisticalControlller.getPaymentPrice);

export default router;