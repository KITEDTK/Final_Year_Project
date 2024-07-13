import { Router } from "express";
import SecondHandController from "./SecondHandController";

const router = Router();

router.post("/", SecondHandController.add);
router.get("/", SecondHandController.getAll);

export default router;