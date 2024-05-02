import { PrismaClient } from "@prisma/client";
import { filterClothes } from "./ClothesTypes";

const prisma = new PrismaClient();

async function filter(filter: filterClothes){
    const {categoryId,sizeIds,colorIds} =  filter;
    let filterCategoryIds = {};
    if(categoryId !== ""){
        const category:any = await prisma.$queryRaw`WITH allCategory AS (
            SELECT id
            FROM Categories
            WHERE id = ${categoryId} 
            UNION ALL
            SELECT c.id
            FROM Categories c
            INNER JOIN allCategory s ON c.parent_id = s.id
        )
        SELECT id FROM allCategory`;
        const categoryIds = category.map((c:any) => c.id);
        filterCategoryIds = { in: categoryIds };
    }
    const result = await prisma.clothes.findMany({
        where:{
            ...(categoryId !== "" ? {categoryId : filterCategoryIds} : {}),
            clothDetails:{
                some:{
                    ...(sizeIds.length > 0 ? {sizeId : {in: sizeIds}} : {}),
                    ...(colorIds.length > 0 ? {colorId : {in: colorIds}} : {}),
                }
            }
        },
        include:{
            clothDetails:{
                where:{
                    AND:[
                    (sizeIds.length > 0 ? {sizeId : {in: sizeIds}} : {}),
                    (colorIds.length > 0 ? {colorId : {in: colorIds}} : {}),
                    ]
                },
                include: {
                    size: { select: { name: true } },
                    color: { select: { name: true } },
                  },
            }
        }
    });
    return result;
}
 export default {filter};