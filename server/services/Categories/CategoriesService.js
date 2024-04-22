const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const arrayToTree = (arr, parentId = null) =>
  arr
    .filter((item) => item.parentId === parentId)
    .map((child) => ({ ...child, children: arrayToTree(arr, child.id) }));
async function getAllCategories() {
  const categories = await prisma.categories.findMany({});
  const nested = arrayToTree(categories);
  return nested;
}

module.exports = {
  getAllCategories,
};
