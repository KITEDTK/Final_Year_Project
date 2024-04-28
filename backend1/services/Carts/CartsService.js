const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function findSingleCart(cartId){
    const cartInfo = await prisma.cartDetails.findMany({
        where:{
            cartId: cartId
        }
    })
    return cartInfo;
}
async function addToCart(cartId, clothDetailId){ // fix clothId
    await prisma.cartDetails.create({
        data:{
            cartId: cartId,
            clothId: clothDetailId,
            updateAt: '2012-06-18 10:34:09.0000000'
        }
    });
    const getCartInfo = await prisma.cartDetails.findMany({
        where:{
            cartId: cartId
        },
        include:{
            cloth: true
        }
    });
    return getCartInfo;
}
async function deleteInCart(cartId, clothId){
    const update = await prisma.cartDetails.delete({
        where:{
            cartId: cartId,
            clothId: clothId
        }
    })
    return update;
}
module.exports = {
    addToCart, findSingleCart, deleteInCart
};