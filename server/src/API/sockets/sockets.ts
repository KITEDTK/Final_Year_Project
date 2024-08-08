import { Server, Socket } from "socket.io";
import http from "http";

let io: Server;

export function initSocket(server: http.Server): Server {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    socket.on("join_user", (data: { userId: string }) => {
      const { userId } = data;
      socket.join(userId);
    });
    socket.on(
      "update_payment_status",
      (data: { paymentId: string; userId: string; status: string }) => {
        const { paymentId, userId, status } = data;
        socket.to(userId).emit("receive_payment_status", { paymentId, status });
      }
    );
    socket.on("join_user_wardrobe", (data: { userId: string }) => {
      const { userId } = data;
      socket.to(userId).emit("update_user_wardrobe");
    });
    socket.on("join_user_selling_items", (data: { userId: string }) => {
      const { userId } = data;
      socket.to(userId).emit("update_user_selling_items");
    });
    socket.on("join_anyone", (data: string) => {
      socket.join(data);
    });
    socket.on("pull_selling_item",(data: {secondhandId: string})=>{
      const {secondhandId} = data;
      socket.to('anyone').emit('update_secondhand_item',{secondhandId});
    });
    socket.on("update_ordering_items_status",(data: {userId: string})=>{
      const {userId} = data;
      socket.to(userId).emit('update_ordering_items');
    });
    socket.on('join_user_being_ordered_item',(data: {sellerId: string})=>{
      const {sellerId} = data;
      socket.to(sellerId).emit('update_being_ordered_items_seller');
    });
    socket.on("update_selling_item", (data:{userId: string})=>{
      const {userId} = data;
      socket.to(userId).emit("update_all_selling_items");
    });
  });
  return io;
}

export function getIo(): Server {
  if (!io) {
    throw new Error("Socket.IO has not been initialized");
  }
  return io;
}
