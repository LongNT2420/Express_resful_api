const siteRouter = require('./site');
const createRouter = require('./create');
const loginRouter = require('./login');
const privateRouter = require('./private');

const path = require('path');

function router(app){
    app.get('/home',(req,res)=>{
        const homeLink = path.format({
            root: '/ignored',
            dir: '/Users/LongZhen/Desktop/Nodejs/Express_API/Express_resful_api/src/app/views',
            base: 'home.html'
          });
        res.sendFile(homeLink);
    })
    app.use('/login',loginRouter);
    app.use('/create',createRouter);
    app.use('/account',siteRouter);
    app.use('/private',privateRouter);
    
}

module.exports = router;