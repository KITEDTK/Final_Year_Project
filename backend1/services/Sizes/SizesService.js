const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllSizes(){
    const sizes = await prisma.sizes.findMany();
    return sizes;
}
module.exports = {
    getAllSizes
}