import { Router } from "express";
import ClothesController from "./ClothesController";

const router = Router();

router.post("/filter", ClothesController.filterClothes);

export default router;