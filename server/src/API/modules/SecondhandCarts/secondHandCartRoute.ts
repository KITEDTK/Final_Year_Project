import { Router } from "express";
import secondhandCartController from "./secondhandCartController";

const router = Router();

router.get("/users/:userId", secondhandCartController.getCartByUser);
router.post("/users/:userId/secondhand/:secondhandId", secondhandCartController.addItemTo2handCart);
router.delete("/:secondhandCartId", secondhandCartController.deleteItem);

export default router;