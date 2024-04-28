import { Router } from "express";
import UsersController from "./UsersController";

const router = Router();

router.get("/",UsersController.getAllUsers);
router.post("/", UsersController.createManyUsers);

export default router;
