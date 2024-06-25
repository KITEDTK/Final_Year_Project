import { Server } from "socket.io";
import http from 'http';

let io; // Socket.IO instance

function initSocket(server: Server) {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    socket.on('join_user', (data) => {
      const { userId } = data;
      socket.join(userId);
    });

    socket.on('update_payment_status', (data) => {
      const { paymentId, userId, status } = data;
      socket.to(userId).emit('receive_payment_status', { paymentId, status });
    });

    socket.on('create_online_payment', (data) => {
      socket.emit('receive_payment', { data });
    });
  });

  return io;
}

function getIo() {
  if (!io) {
    throw new Error('Socket.IO has not been initialized');
  }
  return io;
}

export { initSocket, getIo };
