import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { Request, Response, NextFunction } from "express";
var session = require('express-session');
import { Server } from "socket.io";
const http = require('http');
//Router
import UsersRoute from "./API/modules/Users/UsersRoute";
import ClothesRoute from "./API/modules/Clothes/ClothesRoute";
import CategoriesRoute from "./API/modules/Categories/CategoriesRoute";
import SizesRoute from "./API/modules/Sizes/SizesRoute";
import ColorsRoute from "./API/modules/Colors/ColorsRoute";
import CartsRoute from "./API/modules/Carts/CartsRoute";
import PaymentsRoute from "./API/modules/Payments/paymentsRoute";

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

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  //console.log(`a user connected`);

  socket.on('join_user',(data: { userId: string })=>{
    const { userId } = data;
    socket.join(userId);
  })

  socket.on('update_payment_status',(data: { paymentId: string, userId: string, status: string })=>{
    const {paymentId, userId, status} = data;
    //console.log(`Updating payment status for ${paymentId}, sending to user ${userId}`);
    socket.to(userId).emit('receive_payment_status', {paymentId, status} );
  })

  socket.on('create_online_payment',(data)=>{
    socket.emit('receive_payment',{data})
  })
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
