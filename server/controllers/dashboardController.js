const carts =  require('../services/Carts/carts');

class dashboardController{
    async addToCart(req,res){
        try{
            const {cartId} = req.params;
            const {clothId} = req.body;
            const result = await carts.addToCart(cartId, clothId);
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async findSingleCart(req,res){
        try{
            const {cartId} = req.params;
            const result = await carts.findSingleCart(cartId);
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async deleteInCart(req, res){
        try{
            const {cartId}= req.params;
            const {clothId} = req.body;
            const result = await carts.deleteInCart(cartId,clothId);
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
}
module.exports = new dashboardController();