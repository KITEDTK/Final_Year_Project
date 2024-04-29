import { PrismaClient } from "@prisma/client";
import { filterClothes } from "./ClothesTypes";

const prisma = new PrismaClient();

async function filter(filter: filterClothes){
    const {sizeIds,colorIds} =  filter;
    const result = await prisma.clothes.findMany({
        where:{
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
                }
            }
        }
    });
    return result;
}
 export default {filter};