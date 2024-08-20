import { Router } from "express";
import ClothesController from "./ClothesController";

import uploads from "../../middleware/Excels/uploads";

import * as path from "path";
import multer from "multer";

const router = Router();

const storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    // Check the fieldname and store files accordingly
    if (
      file.fieldname === "image1" ||
      file.fieldname === "image2" ||
      file.fieldname === "image3"
    ) {
      cb(null, path.join(__dirname, "uploads"));
    } else {
      console.log("only excep image file");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  },
});
const upload = multer({
  storage: storage1,
  fileFilter: (req: any, file: any, cb: any) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/webp"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg, .webp format allowed!"));
    }
  },
});
// Specific routes first
router.post(
  "/:clothesId/users/:userId/comments",
  ClothesController.addCommentInClothes
);
router.get("/:clothesId/admin", ClothesController.getSingleClothesAdmin);
router.get("/clothDetails", ClothesController.getAllClothDetail);
router.get("/:clothesId", ClothesController.getSingleCLothes); // Make sure this route points to a specific handler

// Admin routes
router.post("/admin", ClothesController.createClothes);
router.post("/admin/csv", ClothesController.clothesToCSV);
router.get("/admin/orderAmount", ClothesController.getAllClothesAdmin);
router.get("/admin/maxQuantity", ClothesController.getMaxQuantityClothes);
router.post(
  "/admin/csv/read",
  uploads.upload.single("file"),
  ClothesController.readExcelFile
);
router.post("/admin/barcode", ClothesController.generateBarcode);
router.get("/admin/page/:page", ClothesController.getAllClothes);
router.patch("/admin/refunds",ClothesController.refund);
router.patch("/admin/:clothesId", ClothesController.updateSingleClothes);
router.post(
  "/admin/:clothesId/clothDetails",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  ClothesController.createClothDetails
);

// General routes
router.get(
  "/filter/page/:page/categories/:rootCategoryId",
  ClothesController.filterClothes
);
router.get(
  "/categories/:categoryId/maxQuantity",
  ClothesController.getMaxQuantityClothesByRootCategory
);
router.post("/admin/barcode/search",ClothesController.getByBarcode);
router.post("/searching", ClothesController.searching);
router.patch("/admin/clothDetails/:clothDetailId/add-quantity",ClothesController.addClothDetailQuantity);
router.patch("/admin/clothDetails/:clothDetailId/update-quantity", ClothesController.updateClothDetailQuantity);


export default router;
