import express from "express";
import UserRoute from "./API/modules/Users/UsersRoute";
import ClothesRoute from "./API/modules/Clothes/ClothesRoute";
import CategoriesRoute from "./API/modules/Categories/CategoriesRoute";
import bodyParser from "body-parser";
import cors from 'cors';
import { Request, Response, NextFunction } from "express";

// Now you can use cors as a middleware in your Express app


const app = express();
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
}, cors({ maxAge: 84600 }));
app.use(bodyParser.json());

app.use("/users", UserRoute);
app.use("/clothes", ClothesRoute);
app.use("/categories",CategoriesRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
