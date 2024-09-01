import { PrismaClient } from "@prisma/client";
import { User, UserArray, Login } from "./UsersType";
import { sendEmail } from "../../../utils/sendEmail";
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
  const expirationTime = new Date(now.getTime() + 10 * 60 * 1000);
  const checkExist = await prisma.users.findUnique({
    where:{
      email: email,
    }
  });
  if(checkExist && checkExist.isEnable === false){
    const update = await prisma.users.update({
      where:{
        email: email
      },
      data:{
        verifyToken: randomSixDigitNumber.toString(),
        expiredTokenTime: expirationTime,
      }
    });
    return update;
  };
  if(checkExist && checkExist.isEnable === true){
    const error = new Error("User with this email already exists");
    throw error;
  }
  if(!checkExist){
    const create = await prisma.users.create({
      data: {
        email: email,
        username: username,
        password: password,
        fullname: fullname,
        phoneNumber: phoneNumber,
        verifyToken: randomSixDigitNumber.toString(),
        expiredTokenTime: expirationTime,
        isEnable: false
      },
    });
    return create;
  }
 
}
async function verifyRegister(email: string, token: string) {
  const now = new Date();
  const user = await prisma.users.findUnique({
    where:{
      email: email
    }
  });
  if(user && user.expiredTokenTime){
    if(user.verifyToken === token && now < user.expiredTokenTime){
      await prisma.users.update({
        where:{
          email: email
        },
        data:{
          isEnable: true
        }
      });
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  };
}
async function sendVerifyToken(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
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
${user?.verifyToken}
</h2>
    </div>
  </div>
</div>`;

  await sendEmail(
    email,
    html,
    "Cảm ơn bạn đã đăng kí tài khoản trên shop KITE"
  );
}

export default {
  createManyUsers,
  updateUser,
  getAllUsers,
  login,
  sendEmail,
  register,
  sendVerifyToken,
  verifyRegister
};
