import { Router } from "express";
import UsersController from "./UsersController";


const router = Router();

router.get("/",UsersController.getAllUsers);
router.post("/", UsersController.createManyUsers);
router.post("/login",UsersController.login);

export default router;
