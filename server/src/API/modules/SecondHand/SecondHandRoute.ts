import { Router } from "express";
import SecondHandController from "./SecondHandController";

const router = Router();

router.post("/", SecondHandController.add);
router.get("/:page", SecondHandController.getAll);
router.get("/", SecondHandController.maxQuantity);
router.get("/users/:userId/sellingItems", SecondHandController.getSellingItems);
router.delete("/:secondhandId", SecondHandController.pullSellingItems);

export default router;