const colorsService = require("../services/Colors/ColorsService");

class ColorsController{
    async getAllColors(req,res){
        try {
            const result = await colorsService.getAllColors();
            res.json(result);
          } catch (err) {
            res.status(500).json({
              error: err,
            });
        }
    }
}
module.exports = new ColorsController();