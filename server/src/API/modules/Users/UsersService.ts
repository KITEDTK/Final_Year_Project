import { PrismaClient } from "@prisma/client";
import { User, UserArray, Login } from "./UsersType";

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
export default { createManyUsers, updateUser, getAllUsers, login };
