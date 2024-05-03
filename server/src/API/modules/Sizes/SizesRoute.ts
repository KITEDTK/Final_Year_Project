import { Router } from "express";
import SizesController from "./SizesController";

const router = Router();

router.get("/", SizesController.getAllSizes);

export default router;