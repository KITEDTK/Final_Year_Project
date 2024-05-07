import { PrismaClient } from "@prisma/client";
import { filterClothes } from "./ClothesTypes";

const prisma = new PrismaClient();

async function filter(filter: filterClothes) {
  const { categoryId, sizeIds, colorIds, rootCategoryId } = filter;
  let filterCategoryIds = {};
  let filterRootCategoryIds = {};
  let categoryIds = [];
  let rootCategoryIds = [];
  if (categoryId.length > 0) {
    for (const c of categoryId) {
      const category: any = await prisma.$queryRaw`WITH allCategory AS (
              SELECT id
              FROM Categories
              WHERE id = ${c} 
              UNION ALL
              SELECT c.id
              FROM Categories c
              INNER JOIN allCategory s ON c.parent_id = s.id
            )
            SELECT id FROM allCategory`;
      categoryIds.push(...category.map((c: any) => c.id));
      filterCategoryIds = { in: categoryIds };
    }
  }
  if(rootCategoryId !== null){
    const category: any = await prisma.$queryRaw`WITH allCategory AS (
        SELECT id
        FROM Categories
        WHERE id = ${rootCategoryId} 
        UNION ALL
        SELECT c.id
        FROM Categories c
        INNER JOIN allCategory s ON c.parent_id = s.id
      )
      SELECT id FROM allCategory`;
      rootCategoryIds.push(...category.map((c: any) => c.id));
      filterRootCategoryIds = { in: rootCategoryIds };
  }
  const result = await prisma.clothes.findMany({
    where: {
      ...(rootCategoryId !== null ? { categoryId: filterRootCategoryIds } : {}),
      ...(categoryId.length > 0 ? { categoryId: filterCategoryIds } : {}),
      clothDetails: {
        some: {
          ...(sizeIds.length > 0 ? { sizeId: { in: sizeIds } } : {}),
          ...(colorIds.length > 0 ? { colorId: { in: colorIds } } : {}),
        },
      },
    },
    include: {
      clothDetails: {
        where: {
          AND: [
            sizeIds.length > 0 ? { sizeId: { in: sizeIds } } : {},
            colorIds.length > 0 ? { colorId: { in: colorIds } } : {},
          ],
        },
        include: {
          size: { select: { name: true } },
          color: { select: { name: true } },
        },
      },
    },
  });
  return result;
}
export default { filter };
