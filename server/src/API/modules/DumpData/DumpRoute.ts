import { Router } from "express";
import DumpController from "./DumpController";

const router = Router();

//categories
router.post("/categories",DumpController.dumpCategories);
router.post("/clothes",DumpController.dumpClothes);
router.post("/clothDetails",DumpController.dumpClothDetails);

export default router;