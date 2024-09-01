import { Request, Response } from "express";
import UsersService from "./UsersService";

async function createManyUsers(req: Request, res: Response) {
  try {
    const result = await UsersService.createManyUsers(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function getAllUsers(req: Request, res: Response) {
  try {
    const result = await UsersService.getAllUsers();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function login(req: Request, res: Response) {
  try {
    const result = await UsersService.login(req.body);
    // if(result){
    //   res.redirect("http://localhost:3000");
    //   res.send(result);
    // }else{
    //   res.send(result);
    // }
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function sendverifyToken(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const result = await UsersService.sendVerifyToken(email);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
}
async function register(req: Request, res: Response) {
  try {
    const { email, username, password, fullname, phoneNumber } = req.body;
    const result = await UsersService.register(
      email,
      username,
      password,
      fullname,
      phoneNumber
    );
    res.json(result);
  } catch (error) {
    res.status(409).json({ message: error });
  }
}
async function verifyRegister(req: Request, res: Response){
  try{
    const {email, token} = req.body;
    const result = await UsersService.verifyRegister(email, token);
    res.json(result);
  }catch(err){
    console.log(err);
  }
}
export default { createManyUsers, getAllUsers, login, sendverifyToken, register, verifyRegister };
