import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function dumpCategories(){
    const input = [
        {
            name: 'Tất cả'
        }
    ];
    const dataInput = input.map((c)=>{
        return {
            ...c,
            parentId: '0ca741f6-944c-4517-ae17-51087c5ddd11'
        }
    })
    const dump = await prisma.categories.createMany({
        data: dataInput
    });
    return dump;
}
async function updateCategories(){
    const dump = await prisma.categories.updateMany({
        where:{
            parentId: '0ca741f6-944c-4517-ae17-51087c5ddd11',
            NOT:{
                id: '412f916f-0179-4396-a9e7-2ddeba2f3e28'
            }
        },
        data:{
            parentId: '412f916f-0179-4396-a9e7-2ddeba2f3e28'
        }
    });
    return dump;
}
async function updateClothes(){
    const dump = await prisma.clothes.updateMany({
        where:{
            categoryId: '10a4018e-d73f-4662-ae1e-aedf6f4922b2'
        },
        data:{
            categoryId: 'e2bc4a00-ea03-4b52-9c35-bea51df80437'
        }
    })
}
async function dumpClothes(){
    const input = [
        {
            name: 'Quần Jeans Nam Copper Denim Straight',
            price: 549000
        }
    ];
    const dataInput = input.map((c)=>{
        return {
            ...c,
            categoryId : '02e4823e-c649-4879-a103-3eb28c2c3d3f',
            brand: 'KITE'
        }
    });
    const dump = await prisma.clothes.createMany({
        data: dataInput
    });
    return dump;
}
async function dumpClothDetails(){
    const input = [
        //{sizeId: '1b3ff430-118c-45ee-ae30-48615529dacb'},
        //{sizeId: '2a647bfb-8794-4224-b467-cc43a6e2c343'},
        {sizeId: '32c926e4-77a5-41e5-bd6a-de07cf9769e6'},
        {sizeId: 'a247b1ce-4d01-43d3-8308-2cdf83c8baef'},
    ];
    const dataInput = input.map((c,index)=>{
        return {
            ...c,
            colorId: '25780f3a-65d2-4f9e-8954-71b0b2d25e27',
            clothId: '070e3e5f-5c20-4b06-8ab1-80c165faec9b',
            codeBar: `${index}321321fdsf`,
            amount: 10
        }
    });
    const dump = await prisma.clothDetails.createMany({
        data: dataInput
    });
    return dump;
}
async function deleteDumpClothes(){
    const clothesWithoutDetails = await prisma.clothes.findMany({
        where:{
            clothDetails:{
                none:{}
            }
        }
    });
    const clothesIds = clothesWithoutDetails.map((item)=> item.id);
    await prisma.clothes.deleteMany({
        where:{
            id: {
                in: clothesIds
            }
        }
    })
    return clothesWithoutDetails;
}
export default {dumpCategories, dumpClothes, dumpClothDetails, updateCategories, updateClothes,deleteDumpClothes};