import { Request, Response } from "express";
import WardrobeService from "./WardrobeService";

async function getAllByUser(req: Request, res: Response) {
  try {
    const {userId} = req.params;
    const result = await WardrobeService.getAllByUserId(userId);
    res.json(result);
  } catch (err) {
    console.log(err);
  }
}
export default {
  getAllByUser,
};
