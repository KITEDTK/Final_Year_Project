const { PrismaClient } = require("@prisma/client");
const { includes, size } = require("lodash");
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
  };
  //push properties in an object
  if (name !== "") {
    clothesQuery.where = {
      name: name,
    };
  }

  if (sizeIds.length !== 0) {
    //check if clothesQuery has an And or not
    clothesQuery.where.AND = clothesQuery.where.AND || [];
    clothesQuery.where.AND.push({
      clothDetails: {
        some: {
          sizeId: {
            in: sizeIds,
          },
        },
      },
    });
    clothesQuery.include = {
      // chỉ chọn những thằng có giá trị giống trong array
      clothDetails: {
        where: {
          sizeId: {
            in: sizeIds,
          },
        },
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
    };
  }
  if (colorIds.length !== 0) {
    clothesQuery.where.AND = clothesQuery.where.AND || [];
    clothesQuery.where.AND.push({
      clothDetails: {
        some: {
          colorId: {
            in: colorIds,
          },
        },
      },
    });
    clothesQuery.include = {
      clothDetails: {
        where: {
          colorId: {
            in: colorIds,
          },
        },
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
    };
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
