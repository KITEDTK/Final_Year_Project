import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { Request, Response, NextFunction } from "express";


//Router
import UsersRoute from "./API/modules/Users/UsersRoute";
import ClothesRoute from "./API/modules/Clothes/ClothesRoute";
import CategoriesRoute from "./API/modules/Categories/CategoriesRoute";
import SizesRoute from "./API/modules/Sizes/SizesRoute";
import ColorsRoute from "./API/modules/Colors/ColorsRoute";
import CartsRoute from "./API/modules/Carts/CartsRoute";

const app = express();
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
}, cors({ maxAge: 84600 }));
app.use(bodyParser.json());

app.use("/users", UsersRoute);
app.use("/clothes", ClothesRoute);
app.use("/categories",CategoriesRoute);
app.use("/sizes",SizesRoute);
app.use("/colors",ColorsRoute);
app.use("/carts",CartsRoute);

//dump
import DumpRoute from "./API/modules/DumpData/DumpRoute";
app.use("/dump",DumpRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
