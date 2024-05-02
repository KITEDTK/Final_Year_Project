import { PrismaClient } from "@prisma/client";
import buildTree from "../../../utils/buildTree";

const prisma = new PrismaClient();

async function getAllCategories(){
    const categories = await prisma.categories.findMany({});
    const result = buildTree.arrayToTree(categories);
    return result;
}

export default {getAllCategories}