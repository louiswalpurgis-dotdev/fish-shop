const homeRouter = require("./home");
const accountRouter = require("./account");
const profileRouter = require("./profile");
const adminRouter = require("./admin");
const productRouter = require("./product");
const authRouter = require('./auth');

const authGuard = require('../middleware/auth.guard');
const isAdmin = require('../middleware/checkAdmin');

function route(app) {
    app.use('/account',accountRouter);
    app.use('/profile',profileRouter);
    app.use('/auth',authRouter);
    app.use('/admin',authGuard,adminRouter);
    app.use('/product',productRouter);
    app.use('/test',function (req, res){
        res.send('Success');
    });
    app.use('/', homeRouter);
}

module.exports = route;