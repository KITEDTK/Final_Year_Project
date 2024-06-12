import { Router } from "express";
import ClothesController from "./ClothesController";

import uploads from "../../middleware/Excels/uploads";

const router = Router();

router.post("/filter", ClothesController.filterClothes);
router.post("/admin/csv", ClothesController.clothesToCSV);
router.get("/admin", ClothesController.getAllClothes);
router.get("/admin/orderAmount", ClothesController.getAllClothesAdmin);
router.post(
  "/admin/csv/read",
  uploads.upload.single("file"),
  ClothesController.readExcelFile
);
router.get("/clothDetails", ClothesController.getAllClothDetail);
router.get("/:clothesId")
router.post(
  "/:clothesId/users/:userId/comments",
  ClothesController.addCommentInClothes
);
router.get("/:clothesId/admin",ClothesController.getSingleClothesAdmin);

export default router;
