import { Router } from "express";
import ClothesController from "./ClothesController";

import multer from "multer";

var upload = multer({ dest: "uploads/" });

const router = Router();

router.post("/filter", ClothesController.filterClothes);
router.post("/admin/csv", ClothesController.clothesToCSV);
router.get("/admin", ClothesController.getAllClothes);
router.post("/admin/csv/read",ClothesController.readExcelFile);

export default router;