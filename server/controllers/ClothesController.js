const clothesService = require('../services/Clothes/ClothesService');

class ClothesController{
    async getAllClothes(req,res){
        const result = await clothesService.getAllClothes();
        console.log(result);
        res.json(result);
    }catch(err){
        res.status(500).json({
            error: err
        });
    }
}
module.exports = new ClothesController();