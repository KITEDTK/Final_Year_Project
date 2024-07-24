import { Router } from "express";
import SecondhandPaymentsController from "./SecondhandPaymentsController";

const router =  Router();

router.post("/", SecondhandPaymentsController.create);

export default router;