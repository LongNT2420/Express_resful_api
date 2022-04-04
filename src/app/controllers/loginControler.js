const path = require('path');
const account = require('../models/Account');
const jwt = require('jsonwebtoken');

class loginControler {
    getMethodLogin(req,res) {
            const loginLink = path.format({
                root: '/ignored',
                dir: '/Users/LongZhen/Desktop/Nodejs/Express_API/Express_resful_api/src/app/views',
                base: 'login.html'
              });
            res.sendFile(loginLink);
    }
    postMethodLogin(req,res) {
        const userName = req.body.userName;
        const passWord = req.body.passWord;

        account.findOne({userName:userName,passWord:passWord})
        .then((dataAccount)=>{
            console.log(dataAccount);
            if(dataAccount){
                var IDtoken = jwt.sign(dataAccount._id.toString(),'mk');//note: to get _id need convert to string couse it is object
                console.log(IDtoken);
               return  res.json({
                    message:'Login successfully',
                    token:IDtoken,
                })
            }
            else{
                res.send('WRONG USERNAME OR PASSWORD LOGIN AGAIN');
            }
        })
        .catch(error=>{console.log('CAN NOT ACCESS TO DATABASE')});
    }

}

module.exports = new loginControler;