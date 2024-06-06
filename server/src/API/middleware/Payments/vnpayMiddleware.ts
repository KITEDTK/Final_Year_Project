import { Request, Response, NextFunction } from "express";

let vnpayData = {};

// Middleware để xử lý yêu cầu gửi đến /vnpay và lưu dữ liệu vào biến toàn cục
const saveVnpayData = (req: Request, res: Response, next: NextFunction) => {
  vnpayData = req.body;
  next(); // Chuyển yêu cầu tới middleware tiếp theo hoặc endpoint
};
const returnVnpay = (req: Request, res: Response, next: NextFunction) => {
  // Sử dụng dữ liệu từ biến toàn cục
  console.log(res.json);
  console.log(vnpayData);
  // Tiếp tục xử lý yêu cầu...;
  next();
};
export default { saveVnpayData, returnVnpay };
