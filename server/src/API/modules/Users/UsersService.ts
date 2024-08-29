import { PrismaClient } from "@prisma/client";
import { User, UserArray, Login } from "./UsersType";
const nodemailer = require("nodemailer");

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
async function sendEmail() {
  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
   secure: true,
    auth: {
      user: "kitegaming1709@gmail.com", // Your email address
      pass: "dapz umgt qfkp vzvv", // Your email password or app-specific password
    },
  });

  // Set up email options
  const mailOptions = {
    from: '"Maddison Foo Koch 👻" <kitegaming1709@gmail.com>', // Sender address
    to: "kite.dtk@gmail.com", // List of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // Plain text body
    html: "<b>Hello world?</b>", // HTML body
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log('Error in sending email  ' + error);
      return true;
    } else {
     console.log('Email sent: ' + info.response);
     return false;
    }
   });
}

export default { createManyUsers, updateUser, getAllUsers, login, sendEmail };
