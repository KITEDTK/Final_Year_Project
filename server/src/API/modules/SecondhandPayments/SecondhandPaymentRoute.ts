import { Router } from "express";
import SecondhandPaymentsController from "./SecondhandPaymentsController";

const router =  Router();

router.post("/", SecondhandPaymentsController.create);
router.post("/guest", SecondhandPaymentsController.createGuestPayment);
router.get("/paymentDetails/:sellerId", SecondhandPaymentsController.getBeingOrderedItem);
router.patch("/paymentDetails/:paymentDetailId/status",SecondhandPaymentsController.updateStatus);
router.get("/paymentDetails/:userId/orderingItems", SecondhandPaymentsController.getOrdering);

export default router;