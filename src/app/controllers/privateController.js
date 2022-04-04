const jwt = require('jsonwebtoken');

class privateController {
    checkRule(req,res,next){
        const token = req.cookies.token;
        console.log(token);
        try {
           const checkToken = jwt.verify(token,'mk');
           if(checkToken){
               next();
           }
        } catch (error) {
            console.log('khong co quyen truy cap trang nay');
            res.redirect('/login')
        }
    }
    showPage(req,res){
        res.send('welcome to private page')
    }
}

module.exports = new privateController;
