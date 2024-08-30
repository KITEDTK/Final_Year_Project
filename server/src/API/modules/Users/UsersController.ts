import { Request, Response } from "express";
import UsersService from "./UsersService";
import { User } from "./UsersType";

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
async function sendEmail(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const result = await UsersService.sendEmail(email);
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
  } catch (err) {
    console.log(err);
  }
}
export default { createManyUsers, getAllUsers, login, sendEmail, register };
