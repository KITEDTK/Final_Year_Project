const userService = require('../services/Users/UsersService');
const jwt = require('jsonwebtoken');

const secretKey = 'KITE_TOO_HANDSOME_FOR_CODING';
class UsersController{
    async login(req,res){
        try{
            const {usernameOrEmail, password} = req.body;
            const result =  await userService.login(usernameOrEmail,password);
            const token = jwt.sign({ userId: result.id, username: result.username }, secretKey, { expiresIn: '5h' });
            res.json({
                token: result !== '' ? token : '',
                user: result,
                
            });
        }catch(err){
            res.status(500).json({ error: err });
        }
    }
}
module.exports = new UsersController();