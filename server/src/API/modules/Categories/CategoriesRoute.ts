import { Router } from "express";
import CategoriesController from "./CategoriesController";

const router = Router();

router.get("/", CategoriesController.getAllCategories);
router.get("/modal",CategoriesController.getModalCategories);
router.get("/:categoryId", CategoriesController.getCategoryById);
router.get("/:categoryId/child",CategoriesController.getChildCategory);


export default router;