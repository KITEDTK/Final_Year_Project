import { Router } from "express";
import UsersController from "./UsersController";


const router = Router();

router.get("/",UsersController.getAllUsers);
router.post("/", UsersController.createManyUsers);
router.post("/login",UsersController.login);
router.post("/send-email", UsersController.sendEmail);
router.post("/register", UsersController.register);


export default router;
