var createError = require('http-errors');
var express = require('express');//express is package for web applications
var expressLayouts = require('express-ejs-layouts'); //why?
var mongoose = require('mongoose') // import mongo
var path = require('path');//npm package to manipulate path strings
var cookieParser = require('cookie-parser');//npm package to store cookies - do we use this?
var logger = require('morgan');//what is this?

var indexRouter = require('./routes/index');

var database = require('./database/database');
database(); //why is this needed?

var app = express();


// Set layout
app.set('layout', 'layout')//what is this?

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//specifies that we will use EJS

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//this sets main directory for static files like js and css
app.use(expressLayouts);
app.use('/', indexRouter);

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
