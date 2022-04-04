const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/DB'); 
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

// use cookie parser
app.use(cookieParser())

const router = require('./routers');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// connect DB
db.connect();

// router
const staticPath = path.join(__dirname,'/app','/public');
console.log(staticPath);
app.use('/public',express.static(staticPath));
router(app);

app.listen(port,()=>{
    console.log(`Example app listen on port ${port}`)
})