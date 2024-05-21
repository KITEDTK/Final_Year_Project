import { Router } from "express";
import ClothesController from "./ClothesController";

const router = Router();

router.post("/filter", ClothesController.filterClothes);
router.post("/admin/csv", ClothesController.clothesToCSV);
router.get("/admin", ClothesController.getAllClothes);

export default router;