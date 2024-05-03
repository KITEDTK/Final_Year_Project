import { Router } from "express";
import ColorsController from "./ColorsController";

const router = Router();

router.get("/", ColorsController.getAllColors);

export default router;