const express = require("express");
const router = express.Router();
const account = require('../app/models/Account');

router.post('/',(req,res)=>{
   const userName = req.body.userName;
   const passWord = req.body.passWord;
    console.log(`${userName} + ${passWord}`);
    account.findOne({
      userName:userName,
      passWord:passWord  
    })
    .then((data)=>{
        if(data){
            console.log('tai khoan da ton tai');
            res.json('tai khoan da ton tai');
            return;
        }
            account.create({
            userName:userName,
            passWord:passWord,
            })
            .then(()=>{
                console.log('tao tai khoan thanh cong');
                res.json('tao tai khoan thanh cong');
            }
                )
            .catch(()=>console.log('loi khong tao duoc tai khoan'))
    })

})

module.exports = router;