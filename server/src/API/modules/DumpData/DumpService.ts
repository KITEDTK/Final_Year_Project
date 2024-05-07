import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function dumpCategories(){
    const input = [
        {
            name: ''
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
async function dumpClothes(){
    const input = [
        {
            name: 'Áo Thun Nam Chạy Bộ Graphic Jungle'
        },
        {
            name: 'Áo Thun chạy bộ Care & Share'
        },
        {
            name: 'Áo Thun Nam Chạy Bộ Graphic Tropical'
        },
        {
            name: 'Áo Thun Nam Chạy Bộ Graphic Heartbeat'
        }
    ];
    const dataInput = input.map((c)=>{
        return {
            ...c,
            categoryId : '10a4018e-d73f-4662-ae1e-aedf6f4922b2',
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
        {sizeId: '2a647bfb-8794-4224-b467-cc43a6e2c343'},//
        {sizeId: 'a247b1ce-4d01-43d3-8308-2cdf83c8baef'}
    ];
    const dataInput = input.map((c,index)=>{
        return {
            ...c,
            colorId: 'b01ee0c1-9108-4cbe-9996-918b53bccb21',
            clothId: '743c538b-3d09-4c3f-af02-1c0ed3033ce5',
            codeBar: `${index}3333333`,
            amount: 10
        }
    });
    const dump = await prisma.clothDetails.createMany({
        data: dataInput
    });
    return dump;
}
export default {dumpCategories, dumpClothes, dumpClothDetails};