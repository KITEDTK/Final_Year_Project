import { PrismaClient } from "@prisma/client";
import { User, UserArray } from "./UsersType";

const prisma = new PrismaClient();

async function getAllUsers(){
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
    data: {...rest}
  });
  return update 
}
export default { createManyUsers, updateUser, getAllUsers };
