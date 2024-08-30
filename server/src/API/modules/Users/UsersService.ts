import { PrismaClient } from "@prisma/client";
import { User, UserArray, Login } from "./UsersType";
const nodemailer = require("nodemailer");
import * as dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();

async function getAllUsers() {
  const allUsers = await prisma.users.findMany({});
  return allUsers;
}
async function createManyUsers(UsersBody: UserArray) {
  const create = await prisma.users.createMany({
    data: UsersBody,
  });
  return create;
}
async function updateUser(UserBody: User, userId: string) {
  const { ...rest } = UserBody;
  const update = await prisma.users.update({
    where: {
      id: userId,
    },
    data: { ...rest },
  });
  return update;
}
async function login(input: Login) {
  const { usernameOrEmail, password } = input;
  const checkIfEmail: boolean = usernameOrEmail.includes("@");
  const result = await prisma.users.findUnique({
    where: {
      ...(checkIfEmail === true
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }),
      password: password,
    },
  });
  return result;
}
async function register(
  email: string,
  username: string,
  password: string,
  fullname: string,
  phoneNumber: string
) {
  const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const expirationTime = new Date(now.getTime() + 10 * 60 * 1000); // 5 minutes from now
  const create = await prisma.users.create({
    data: {
      email: email,
      username: username,
      password: password,
      fullname: fullname,
      phoneNumber: phoneNumber,
      verifyToken: randomSixDigitNumber.toString(),
      expiredTokenTime: expirationTime,
    },
  });
  return create;
}
async function verify(userId: string, ){
  
}
async function sendEmail(email: string) {
  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });
  const html = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">KITESHOP</a>
    </div>
    <p style="font-size:1.1em">Xin chào, cảm ơn bạn đã đăng kí tài khoản trên trang web của chúng tôi,</p>
    <p>Shop gửi bạn mã xác thực OTP. Mã có hiệu lực trong 10p. Vui lòng không chia sẻ mã cho bất kì ai.
     </p>
    <h2 style="background: #00466a; margin: 0 auto; padding: 0 10px; color: #fff; border-radius: 4px; text-align: center; font-size: 32px; width: fit-content;">
  324457
</h2>
    </div>
  </div>
</div>`; // HTML body with a button
  // Set up email options
  const mailOptions = {
    from: '"Shop KITE " <kitegaming1709@gmail.com>', // Sender address
    to: email, // List of receivers
    subject: "Cảm ơn bạn đã đăng kí tài khoản trên shop KITE", // Subject line
    text: "", // Plain text body
    html: html, // HTML body
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log("Error in sending email  " + error);
      return true;
    } else {
      console.log("Email sent: " + info.response);
      return false;
    }
  });
}

export default {
  createManyUsers,
  updateUser,
  getAllUsers,
  login,
  sendEmail,
  register,
};
