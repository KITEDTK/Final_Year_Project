const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllClothes(){
    const clothes = await prisma.clothes.findMany({
        include:{
            clothDetails : true
        }
    });
    return clothes;
}
async function getSingleClothes(clothesId){
    const cloth = await prisma.clothes.findUnique({
        where:{
            id: clothesId
        },
        include:{
            clothDetails: true
        }
    });
    return cloth
}
module.exports ={
    getAllClothes, getSingleClothes
}