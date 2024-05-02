import { Router } from "express";
import CategoriesController from "./CategoriesController";

const router = Router();

router.get("/", CategoriesController.getAllCategories);

export default router;