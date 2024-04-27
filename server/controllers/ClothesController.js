const clothesService = require("../services/Clothes/ClothesService");

class ClothesController {
  async getAllClothes(req, res) {
    try {
      const result = await clothesService.getAllClothes();
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
  async filterClothes(req,res){
    try {
      const result = await clothesService.filterClothes(req.body);
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
  async getClothesByCategories(req,res){
    try{
      const {categoryId} = req.params;
      const result = await clothesService.getClothesByCategory(categoryId);
      res.json(result);
    }catch(err){
      res.status(500).json({
        error: err,
      });
    }
  }
}
module.exports = new ClothesController();
