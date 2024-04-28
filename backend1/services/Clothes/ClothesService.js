const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllClothes() {
  const clothes = await prisma.clothes.findMany({
    include: {
      clothDetails: {
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
    },
  });
  return clothes;
}
async function getClothesByCategory(categoryId) {
  const category = await prisma.$queryRaw`WITH allCategory AS (
    SELECT id
    FROM Categories
    WHERE id = ${categoryId} 
    UNION ALL
    SELECT c.id
    FROM Categories c
    INNER JOIN allCategory s ON c.parent_id = s.id)
  SELECT id FROM allCategory`;
  const categoryIds = category.map((c) => c.id);
  const clothes = await prisma.clothes.findMany({
    where :{ 
      categoryId: {
        in : categoryIds
      }
    },
    include: {
      clothDetails: {
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
    }
  });
  return clothes;
}
async function filterClothes(filter) {
  const { sizeIds, colorIds, categoryId } = filter;
  let clothesQuery = {
    where: { AND: [] }, // property rỗng lấy thằng con
    include: {
      clothDetails: {
        where: {}, // điều kiện lấy sizeId, colorId
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
    },
  };
  if (sizeIds.length > 0 || colorIds.length > 0 || categoryId !== "") {
    let filterSizeIdAndColorId = {};
    let filterCategoryIds = {};
    if (sizeIds.length > 0) {
      filterSizeIdAndColorId.sizeId = { in: sizeIds };
    }

    if (colorIds.length > 0) {
      filterSizeIdAndColorId.colorId = { in: colorIds };
    }

    if (categoryId !== "") {
      const category = await prisma.$queryRaw`WITH allCategory AS (
        SELECT id
        FROM Categories
        WHERE id = ${categoryId} 
        UNION ALL
        SELECT c.id
        FROM Categories c
        INNER JOIN allCategory s ON c.parent_id = s.id
    )
    SELECT id FROM allCategory`;
      const categoryIds = category.map((c) => c.id);
      filterCategoryIds.categoryId = { in: categoryIds };
    }

    clothesQuery.where.AND = [
      // không truy cập vào được property cấp 2 của con nên phải khai báo 1 property rỗng ở thằng clothesQuery
      { clothDetails: { some: filterSizeIdAndColorId } },
      { ...filterCategoryIds },
    ];
    clothesQuery.include.clothDetails.where = filterSizeIdAndColorId; // filter thằng con sao cho chỉ lấy sizeIds, colorIds bằng với giá trị được truyền vào
  }
  const clothes = await prisma.clothes.findMany(clothesQuery);
  return clothes;
}
async function getSingleClothes(clothesId) {
  const cloth = await prisma.clothes.findUnique({
    where: {
      id: clothesId,
    },
    include: {
      clothDetails: true,
    },
  });
  return cloth;
}

module.exports = {
  getAllClothes,
  getSingleClothes,
  filterClothes,
  getClothesByCategory,
};
