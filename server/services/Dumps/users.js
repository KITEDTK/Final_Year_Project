const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createManyUsers() {
  const users = [
    {
      username: "user1",
      password: "password1",
      fullname: "User One",
      email: "user1@example.com",
      phoneNumber: "1234567890",
    },
    {
      username: "user2",
      password: "password2",
      fullname: "User Two",
      email: "user2@example.com",
      phoneNumber: "2345678901",
    },
    {
      username: "user3",
      password: "password3",
      fullname: "User Three",
      email: "user3@example.com",
      phoneNumber: "3456789012",
    },
    {
      username: "user4",
      password: "password4",
      fullname: "User Four",
      email: "user4@example.com",
      phoneNumber: "4567890123",
    },
    {
      username: "user5",
      password: "password5",
      fullname: "User Five",
      email: "user5@example.com",
      phoneNumber: "5678901234",
    },
    {
      username: "user6",
      password: "password6",
      fullname: "User Six",
      email: "user6@example.com",
      phoneNumber: "6789012345",
    },
    {
      username: "user7",
      password: "password7",
      fullname: "User Seven",
      email: "user7@example.com",
      phoneNumber: "7890123456",
    },
    {
      username: "user8",
      password: "password8",
      fullname: "User Eight",
      email: "user8@example.com",
      phoneNumber: "8901234567",
    },
    {
      username: "user9",
      password: "password9",
      fullname: "User Nine",
      email: "user9@example.com",
      phoneNumber: "9012345678",
    },
    {
      username: "user10",
      password: "password10",
      fullname: "User Ten",
      email: "user10@example.com",
      phoneNumber: "0123456789",
    },
  ];

  const creates = await prisma.users.createMany({
    data: users,
  });
  return { ...creates };
}
async function createManySizes() {
  const data = [
    {
      name: "S",
    },
    {
      name: "M",
    },
    {
      name: "L",
    },
    {
      name: "XL",
    },
  ];
  const create = await prisma.sizes.createMany({
    data: data,
  });
  return { create };
}
async function createManyColors() {
  const data = [
    { name: "red" },
    { name: "blue" },
    { name: "green" },
    { name: "yellow" },
    { name: "orange" },
    { name: "purple" },
    { name: "pink" },
  ];
  const create = await prisma.colors.createMany({
    data: data,
  });
  return { create };
}
async function createManyCategories(){
  
  await prisma.categories.create({
    data: {
      name: "All Men Shirts",
      parentId: "f443d79e-7ac9-49b8-af5f-4bb9fd6fcdf2"
    }
  });
}
module.exports = {
  createManyUsers,
  createManySizes,
  createManyColors,
  createManyCategories
};
