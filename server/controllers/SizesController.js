const sizesService = require("../services/Sizes/SizesService");

class SizesController {
  async getAllSizes(req, res) {
    try {
      const result = await sizesService.getAllSizes();
      res.json(result);
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  }
}
module.exports = new SizesController();
