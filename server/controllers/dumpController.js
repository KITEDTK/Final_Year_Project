const usersDumpService = require('../services/Dumps/users');
const clothesDumpService = require('../services/Dumps/clothes');
const clothDetailsDumpService = require('../services/Dumps/clothDetail');

class dumpController {
    async userDumps(res,req){
        try{
            const result = await usersDumpService.createManyUsers();
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async sizeDumps(res,req){
        try{
            const result = await usersDumpService.createManySizes();
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async colorDumps(res,req){
        try{
            const result = await usersDumpService.createManyColors();
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async categoriesDumps(res,req){
        try{
            const result = await usersDumpService.createManyCategories();
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async clothesDumps(res, req){
        try{
            const result = await clothesDumpService.createManyClothes();
            console.log(result);
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
    async clothDetailsDump(res, req){
        try{
            const result = await clothDetailsDumpService.createManyClothDetails();
            console.log(result);
        }catch(err){
            const result = await clothDetailsDumpService.createManyClothDetails();
            res.status(500).json({ error: result });
        }
    }
}
module.exports = new dumpController();