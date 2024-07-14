import { Router } from "express";
import WardrobeController from "./WardrobeController";

const router = Router();

router.get("/users/:userId", WardrobeController.getAllByUser);

export default router;