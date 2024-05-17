import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addToCarts(userId: string, clothDetailId: string){
    const check = await prisma.carts.findFirst({
        where:{
            userId: userId,
            clothDetailId: clothDetailId,
            isCheckout: false
        }
    });
    if(check){
        await prisma.carts.update({
            where:{
                id: check.id
            },
            data:{
                amount: check.amount + 1
            }
        })
    }else{
        await prisma.carts.create({
            data:{
                userId: userId,
                clothDetailId: clothDetailId,
                isCheckout: false,
                amount: 1
            }
        })
    }
    const data = await prisma.carts.findMany({
        where:{
            userId: userId,
            isCheckout: false
        },
        include:{
            clothDetails:{
                select:{
                    size:{
                        select: {
                            name: true
                        }
                    },
                    color:{
                        select:{
                            name: true
                        }
                    },
                    cloth:{
                        select:{
                            name: true
                        }
                    }
                }
            }
        }
    });
    return data;
}
async function getCartInfo(userId: string){
    const result = await prisma.carts.findMany({
        where:{
            userId: userId,
            isCheckout: false
        },
        include:{
            clothDetails:{
                select:{
                    size:{
                        select: {
                            name: true
                        }
                    },
                    color:{
                        select:{
                            name: true
                        }
                    },
                    cloth:{
                        select:{
                            name: true
                        }
                    }
                }
            }
        }
    })
    return result;
}
async function deleteItemInCart(cartId: string, userId: string){
    const check = await prisma.carts.findUnique({
        where:{
            id: cartId,
            userId: userId
        }
    });
    if(check){
        await prisma.carts.delete({
            where:{
                id: cartId,
                userId: userId
            }
        });
    }
    const result = await prisma.carts.findMany({
        where:{
            userId: userId,
            isCheckout: false
        },
        include:{
            clothDetails:{
                select:{
                    size:{
                        select: {
                            name: true
                        }
                    },
                    color:{
                        select:{
                            name: true
                        }
                    },
                    cloth:{
                        select:{
                            name: true
                        }
                    }
                }
            }
        }
    })
    return result;
}
export default {addToCarts, getCartInfo, deleteItemInCart};