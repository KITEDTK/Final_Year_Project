const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllColors(){
    const colors = await prisma.colors.findMany({});
    return colors; 
}
module.exports ={
    getAllColors
}