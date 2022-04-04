const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    userName:String,
    passWord:String,
    createAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now},
})

module.exports = mongoose.model('account',Account);