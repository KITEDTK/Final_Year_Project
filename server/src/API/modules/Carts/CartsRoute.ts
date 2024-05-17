import { Router } from "express";
import CartsController from "./CartsController";

const router = Router();

router.post("/users/:userId",CartsController.addItemToCarts);
router.get("/users/:userId", CartsController.getCartInfo);
router.delete("/:cartId/users/:userId", CartsController.deleteItemInCart);

export default router;