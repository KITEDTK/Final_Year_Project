const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Utils = require('../../utils/Ultil');


async function getAllCategories() {
  const categories = await prisma.categories.findMany({});
  const nested = Utils.arrayToTree(categories);
  return nested;
}

module.exports = {
  getAllCategories,
};
