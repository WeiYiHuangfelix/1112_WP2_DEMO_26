var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv'); //.env
dotenv.config();

const db = require('./utils/database');
//const testDB  = require('./utils/test-db');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cardRouter_26 = require('./routes/card_26');
const card2Router_26 = require('./routes/card2_26');

const card2ApiRouter_26 = require('./routes/api/card2ApiRouter_26');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/card_26', cardRouter_26);
app.use('/card2_26', card2Router_26);

app.use('/api/card2_26', card2ApiRouter_26);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
