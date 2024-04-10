const usersDumpService = require('../services/Dumps/users');

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
}
module.exports = new dumpController();