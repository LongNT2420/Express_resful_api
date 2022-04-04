const Course = require('../models/Course');
const Account = require('../models/Account');
const express = require('express');
const app = express();

const PAGE_SITE = 2;
class siteController {
    home(req,res,next) {
            Course.find({})
                .then((course)=>{
                    res.json(course);
                })
                .catch((error)=>console.log(error))
            // res.send('home');
            // console.log(req.body);
            // res.send('body');
        }
    account(req,res,next){
        var page = req.query.page;
        if(page){
            page = parseInt(page);
            var pageOut = (page - 1)*PAGE_SITE;
            Account.find({})
            .skip(pageOut)
            .limit(PAGE_SITE)
            .then((data)=>{
                res.json(data);
            })
            .catch((error)=>{console.log(error)});
        }
        else{
       Account.find({})
       .then((account)=>{
           res.json(account);
       })
       .catch((error)=>{
           console.log(error);
       })
        }
    }
    
}

module.exports = new siteController;