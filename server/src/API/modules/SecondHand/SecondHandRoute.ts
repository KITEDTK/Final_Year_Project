import { Router } from "express";
import SecondHandController from "./SecondHandController";

const router = Router();

router.post("/", SecondHandController.add);
router.get("/:page", SecondHandController.getAll);

export default router;