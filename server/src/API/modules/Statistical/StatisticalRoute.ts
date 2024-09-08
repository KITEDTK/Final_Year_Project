import { Router } from "express";
import StatisticalControlller from "./StatisticalControlller";

const router = Router();

router.post("/initProductPrice",StatisticalControlller.getInitProductPrice);
router.post("/paymentPrice", StatisticalControlller.getPaymentPrice);
router.get("/clothes/topten/month", StatisticalControlller.getTopTenItemsThisMonth);
router.get("/clothes/topten/week", StatisticalControlller.getTopTenThisWeek)

export default router;