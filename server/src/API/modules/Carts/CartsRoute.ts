import { Router } from "express";
import CartsController from "./CartsController";

const router = Router();

router.post("/users/:userId",CartsController.addItemToCarts);
router.get("/users/:userId", CartsController.getCartInfo);

export default router;