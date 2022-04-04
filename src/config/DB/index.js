const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/my_DB');
        console.log('connect sucessfully');
    } catch (error) {
        console.log('connect failure ');
    }
}

module.exports = {connect};