import { Router } from "express";
import ClothesController from "./ClothesController";

import uploads from "../../middleware/Excels/uploads";

const router = Router();

// Specific routes first
router.post("/:clothesId/users/:userId/comments", ClothesController.addCommentInClothes);
router.get("/:clothesId/admin", ClothesController.getSingleClothesAdmin);
router.get("/:clothesId", ClothesController.getSingleCLothes); // Make sure this route points to a specific handler

// Admin routes
router.post("/admin/csv", ClothesController.clothesToCSV);
router.get("/admin/orderAmount", ClothesController.getAllClothesAdmin);
router.get("/admin/maxQuantity", ClothesController.getMaxQuantityClothes);
router.post("/admin/csv/read", uploads.upload.single("file"), ClothesController.readExcelFile);
router.post("/admin/barcode", ClothesController.generateBarcode)
router.get("/admin/page/:page", ClothesController.getAllClothes);
router.patch("/admin/:clothesId", ClothesController.updateSingleClothes);

// General routes
router.get("/filter/page/:page/categories/:rootCategoryId", ClothesController.filterClothes);
router.get("/clothDetails", ClothesController.getAllClothDetail);
router.get("/categories/:categoryId/maxQuantity",ClothesController.getMaxQuantityClothesByRootCategory);


export default router;
