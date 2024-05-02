import { Router } from "express";
import CategoriesController from "./CategoriesController";

const router = Router();

router.get("/", CategoriesController.getAllCategories);
router.get("/:categoryId", CategoriesController.getCategoryById);

export default router;