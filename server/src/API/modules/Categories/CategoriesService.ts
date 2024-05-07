import { PrismaClient } from "@prisma/client";
import buildTree from "../../../utils/buildTree";

const prisma = new PrismaClient();

async function getAllCategories(){
    const categories = await prisma.categories.findMany({});
    const result = buildTree.arrayToTree(categories);
    return result;
}
async function getTreeCategoriesById(categoryId: string){
    const categories: any = await prisma.$queryRaw`WITH allCategory AS (
        SELECT *, parent_id AS parentId
        FROM Categories
        WHERE id = ${categoryId} 
        UNION ALL
        SELECT c.*, c.parent_id AS parentId
        FROM Categories c
        INNER JOIN allCategory s ON c.parent_id = s.id
    )
    SELECT * FROM allCategory`;
    //const nested = buildTree.arrayToTree(categories);
    const result = await prisma.categories.findUnique({
        where:{
            id: categoryId
        }
    })
    return result;
}
async function getChildCategories(categoryId: string){
    const result = await prisma.categories.findMany({
        where: {
            parentId : categoryId
        }
    });
    return result
}
export default {getAllCategories, getTreeCategoriesById, getChildCategories}