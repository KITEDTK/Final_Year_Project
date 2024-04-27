const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Utils = require('../../utils/Ultil');


async function getAllCategories() {
  const categories = await prisma.categories.findMany({});
  const nested = Utils.arrayToTree(categories);
  return nested;
}
async function getSingleCategories(categoryId){
  const category = await prisma.$queryRaw`WITH allCategory AS (
    SELECT *, parent_id AS parentId
    FROM Categories
    WHERE id = ${categoryId} 
    UNION ALL
    SELECT c.*, c.parent_id AS parentId
    FROM Categories c
    INNER JOIN allCategory s ON c.parent_id = s.id
)
SELECT * FROM allCategory`;
  const nested = Utils.arrayToTree(category);
  return {nested: nested, flat: category, id: categoryId};
}

module.exports = {
  getAllCategories, getSingleCategories
};
