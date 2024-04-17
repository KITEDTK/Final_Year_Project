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
}
module.exports = new ClothesController();
