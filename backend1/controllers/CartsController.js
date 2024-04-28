const cartsService =  require('../services/Carts/CartsService');

class CartsController{
    async addToCart(req,res){
        try{
            const {cartId} = req.params;
            const {clothId} = req.body;
            const result = await cartsService.addToCart(cartId, clothId);
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async findSingleCart(req,res){
        try{
            const {cartId} = req.params;
            const result = await cartsService.findSingleCart(cartId);
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async deleteInCart(req, res){
        try{
            const {cartId}= req.params;
            const {clothId} = req.body;
            const result = await cartsService.deleteInCart(cartId,clothId);
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
}
module.exports = new CartsController();