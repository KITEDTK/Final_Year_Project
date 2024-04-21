const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllClothes() {
  const clothes = await prisma.clothes.findMany({
    include: {
      clothDetails: true,
      clothDetails: {
        include: {
          size: {
            select: {
              name: true,
            },
          },
          color: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return clothes;
}
async function filterClothes(filter) {
  const { sizeIds, colorIds, name } = filter;
  let clothesQuery = {
    where: {},
    include: {
      clothDetails: {
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
    },
  };

  if (name !== "") {
    clothesQuery.where.name = name;
  }

  if (sizeIds.length > 0 || colorIds.length > 0) {
    const where = {};
    const searchName ={};
    if (sizeIds.length > 0) {
      where.sizeId = { in: sizeIds };
    }

    if (colorIds.length > 0) {
      where.colorId = { in: colorIds };
    }

    if(name !== ""){ //sau này fix thành filter category 
      searchName = { name: name }
    }

    clothesQuery.where.AND = [
      ...(clothesQuery.where.AND || []),
      { clothDetails: { some: where } },
      {...(searchName)}
    ];
    clothesQuery.include.clothDetails.where = where;
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
};
