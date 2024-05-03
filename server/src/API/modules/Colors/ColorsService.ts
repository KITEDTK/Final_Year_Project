import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllColors(){
    const result = await prisma.colors.findMany();
    return result;
}
export default {getAllColors};