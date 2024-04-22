const categoriesService = require("../services/Categories/CategoriesService");

class CategoriesController {
    async getAllCategories(req,res){
        try {
            const result = await categoriesService.getAllCategories();
            res.json(result);
          } catch (err) {
            res.status(500).json({
              error: err,
            });
          }
    }
}
module.exports = new CategoriesController();