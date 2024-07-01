import { Router } from "express";
import StatisticalControlller from "./StatisticalControlller";

const router = Router();

router.post("/initProductPrice",StatisticalControlller.getInitProductPrice);

export default router;