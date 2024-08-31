import { Router } from "express";
import UsersController from "./UsersController";


const router = Router();

router.get("/",UsersController.getAllUsers);
router.post("/", UsersController.createManyUsers);
router.post("/login",UsersController.login);
router.post("/send-token", UsersController.sendverifyToken);
router.post("/register", UsersController.register);
router.post("/verify-register", UsersController.verifyRegister);


export default router;
