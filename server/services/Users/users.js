const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function login(usernameOrEmail, password) {
  const loginWithUsername = await prisma.users.findFirst({
    where: {
      username: usernameOrEmail,
      password: password,
    },
  });
  const loginWithEmail = await prisma.users.findFirst({
    where: {
      email: usernameOrEmail,
      password: password,
    },
  });
  let login;
  if(loginWithUsername){
    login = loginWithUsername;
  }else if(loginWithEmail){
    login = loginWithEmail;
  }
  return { login };
}
module.exports = {
  login,
};
