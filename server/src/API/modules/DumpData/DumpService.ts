import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function dumpCategories(){
    const input = [
        {
            name: 'Quần shorts'
        }
    ];
    const dataInput = input.map((c)=>{
        return {
            ...c,
            parentId: ''
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
            parentId: '',
            NOT:{
                id: ''
            }
        },
        data:{
            parentId: ''
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
            name: ''
        },

    ];
    const dataInput = input.map((c)=>{
        return {
            ...c,
            categoryId : '',
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
            colorId: 'ee5e4d68-c3de-47bb-9b64-bb0829d327da',
            clothId: '1ed358c0-3a33-40db-8190-7bf8833902fe',
            codeBar: `${index}sdsss3232`,
            amount: 10
        }
    });
    const dump = await prisma.clothDetails.createMany({
        data: dataInput
    });
    return dump;
}
export default {dumpCategories, dumpClothes, dumpClothDetails, updateCategories, updateClothes};