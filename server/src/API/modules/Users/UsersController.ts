import {  Request, Response } from "express";
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
async function login(req: Request, res: Response){
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
async function sendEmail(req: Request, res: Response){
  try{
    const result = await UsersService.sendEmail();
    res.send(result);
  }catch(err){
    console.log(err);
  }
}
export default {createManyUsers, getAllUsers, login, sendEmail}
