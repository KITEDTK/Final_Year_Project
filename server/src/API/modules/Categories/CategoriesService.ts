import { PrismaClient } from "@prisma/client";
import buildTree from "../../../utils/buildTree";

const prisma = new PrismaClient();

async function getAllCategories(){
    const categories = await prisma.categories.findMany({});
    const result = buildTree.arrayToTree(categories);
    return result;
}
async function getTreeCategoriesById(categoryId: string){
    const result = await prisma.categories.findUnique({
        where:{
            id: categoryId
        }
    })
    return result;
}
async function getChildCategories(categoryId: string){
    const getAllCategory: any =  await prisma.$queryRaw`WITH allCategory AS (
        SELECT *
        FROM Categories
        WHERE id = ${categoryId} 
        UNION ALL
        SELECT c.*
        FROM Categories c
        INNER JOIN allCategory s ON c.parent_id = s.id
      )SELECT * FROM allCategory`;
      const categoryIdArray = getAllCategory.map((c: any)=> c.id);
    const result = await prisma.categories.findMany({
        where: {
            parentId : categoryId
        },
        include:{
            Clothes:{
                where:{
                    categoryId: {
                        in : categoryIdArray
                    }
                },
                include:{
                    clothDetails:{
                        select:{
                            amount: true
                        }
                    }
                }
            }
        }
    });
    const modifiedResult = result.map((category) => {
        const totalAmount = category.Clothes.reduce((clothTotal, cloth) => { // Cộng tổng số lượng 
            const clothAmount = cloth.clothDetails.reduce((detailTotal, detail) => {
                return detailTotal + detail.amount;
            }, 0);
            return clothTotal + clothAmount;
        }, 0);
        const {Clothes, ...rest} = category; // chỉ lấy phần rest 
        return {
            ...rest,
            totalAmount: totalAmount
        };
    });
    return modifiedResult;
}
async function getCategoriesModal(){
    
}
export default {getAllCategories, getTreeCategoriesById, getChildCategories, getCategoriesModal}