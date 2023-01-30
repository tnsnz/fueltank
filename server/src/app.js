var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require('ejs');

var indexRouter = require('./routes');
var usersRouter = require('./routes/auth');

var models = require("./models");

models.sequelize.sync().then(() => {
    console.log("DB 연결 성공");
    console.log(__dirname + '/config/config.js');

}).catch(err => {
    console.log("DB 연결 실패");
    console.log(err);
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'tempviews'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// swagger
const {swaggerUi, specs} = require('./swagger/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
