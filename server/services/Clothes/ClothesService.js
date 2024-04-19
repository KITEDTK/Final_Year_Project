const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllClothes(){
    const clothes = await prisma.clothes.findMany({
        include:{
            clothDetails : true,
            clothDetails: {
                include:{
                    size: {
                        select: {
                            name: true
                        }
                    },
                    color: {
                        select:{
                            name: true
                        }
                    }
                }
            }
        }
    });
    return clothes;
}
async function filterClothes(filter){
    const {sizeIds, colorIds,name} = filter;
    let clothesQuery = {
        include:{
            clothDetails : true,
            clothDetails: {
                include:{
                    size: {
                        select: {
                            name: true
                        }
                    },
                    color: {
                        select:{
                            name: true
                        }
                    }
                }
            },
        }
    }
    //push properties in an object 
    if(name){
        clothesQuery.where = {
            name: name
        } 
    };
    if(sizeIds){
        clothesQuery.where.include.clothDetails.where = {
            sizeId : {
                in: sizeIds
            }
        }
    };
    if(colorIds){
        clothesQuery.where = {
            clothDetails:{
                some:{
                    sizeId :{
                        in: sizeIds
                    }
                }
            }
        };
    }
    const clothes = prisma.clothes.findMany(clothesQuery);
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
    getAllClothes, getSingleClothes,filterClothes
}