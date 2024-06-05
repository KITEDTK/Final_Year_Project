import { Router } from "express";
import ClothesController from "./ClothesController";

import uploads from "../../middleware/Excels/uploads";

const router = Router();

router.post("/filter", ClothesController.filterClothes);
router.post("/admin/csv", ClothesController.clothesToCSV);
router.get("/admin", ClothesController.getAllClothes);
router.post(
  "/admin/csv/read",
  uploads.upload.single("file"),
  ClothesController.readExcelFile
);
router.get("/clothDetails", ClothesController.getAllClothDetail);
router.get("/:clothesId", ClothesController.getSingleCLothes);


export default router;
