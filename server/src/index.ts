import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { Request, Response, NextFunction } from "express";
var session = require('express-session');
const http = require('http');
//Router
import UsersRoute from "./API/modules/Users/UsersRoute";
import ClothesRoute from "./API/modules/Clothes/ClothesRoute";
import CategoriesRoute from "./API/modules/Categories/CategoriesRoute";
import SizesRoute from "./API/modules/Sizes/SizesRoute";
import ColorsRoute from "./API/modules/Colors/ColorsRoute";
import CartsRoute from "./API/modules/Carts/CartsRoute";
import PaymentsRoute from "./API/modules/Payments/paymentsRoute";

import { initSocket } from "./API/sockets/sockets";

const app = express();
const server = http.createServer(app); 

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Đặt secure: true nếu sử dụng HTTPS
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
}, cors({ maxAge: 84600 }));
export const io = initSocket(server);
app.use(bodyParser.json());

app.use("/users", UsersRoute);
app.use("/clothes", ClothesRoute);
app.use("/categories",CategoriesRoute);
app.use("/sizes",SizesRoute);
app.use("/colors",ColorsRoute);
app.use("/carts",CartsRoute);
app.use("/payments", PaymentsRoute);

//dump
import DumpRoute from "./API/modules/DumpData/DumpRoute";
app.use("/dump",DumpRoute);


const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
