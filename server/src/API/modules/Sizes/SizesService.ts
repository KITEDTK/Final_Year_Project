import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllSizes(){
    const result = await prisma.sizes.findMany();
    return result;
}
export default {getAllSizes}