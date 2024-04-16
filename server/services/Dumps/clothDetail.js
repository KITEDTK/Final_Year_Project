const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createManyClothDetails(){
    const clothesIds = await prisma.clothes.findMany({
        select:{
            id: true
        }
    });
    const sizeIds = await prisma.sizes.findMany({
        select:{
            id: true
        }
    });
    const colorIds = await prisma.colors.findMany({
        select:{
            id: true
        }
    });
    const clothDetailss = [
        {
            sizeId: sizeIds[Math.floor(Math.random() * sizeIds.length)].id,
            colorId: colorIds[Math.floor(Math.random() * colorIds.length)].id,
            clothId: clothesIds[Math.floor(Math.random() * clothesIds.length)].id,
            amount: 1,
            codeBar: '4'
        },
        {
            sizeId: sizeIds[Math.floor(Math.random() * sizeIds.length)].id,
            colorId: colorIds[Math.floor(Math.random() * colorIds.length)].id,
            clothId: clothesIds[Math.floor(Math.random() * clothesIds.length)].id,
            amount: 1,
            codeBar: '5'
        },
        {
            sizeId: sizeIds[Math.floor(Math.random() * sizeIds.length)].id,
            colorId: colorIds[Math.floor(Math.random() * colorIds.length)].id,
            clothId: clothesIds[Math.floor(Math.random() * clothesIds.length)].id,
            amount: 1,
            codeBar: '6'
        },
    ]
    const createClothDetail = await prisma.clothDetails.createMany({
        data: clothDetailss
    })
    return createClothDetail;
}
module.exports = {
    createManyClothDetails
}