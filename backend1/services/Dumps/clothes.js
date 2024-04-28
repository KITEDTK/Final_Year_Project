const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createManyClothes(){
    const categoriesId = await prisma.categories.findMany({
        select:{
            id: true
        }
    });
    const clothes = [
        {
            name: 'clothesTest1',
            categoryId: categoriesId[Math.floor(Math.random() * categoriesId.length)].id,
            brand: 'brand1'
        },
        {
            name: 'clothesTest2',
            categoryId: categoriesId[Math.floor(Math.random() * categoriesId.length)].id,
            brand: 'brand2'
        },
        {
            name: 'clothesTest3',
            categoryId: categoriesId[Math.floor(Math.random() * categoriesId.length)].id,
            brand: 'brand3'
        },
    ];
    const createClothes = await prisma.clothes.createMany({
        data: clothes
    });
    return createClothes;
};
module.exports = {
    createManyClothes
}