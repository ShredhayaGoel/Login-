var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();




// =========================
// MongoDB Connection
// =========================

mongoose.connect("mongodb://127.0.0.1:27017/signupDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });


// =========================
// View Engine
// =========================

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// =========================
// Middleware
// =========================

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());


// =========================
// Routes
// =========================

app.use('/', indexRouter);

app.use('/users', usersRouter);


// =========================
// 404 Error
// =========================

app.use(function (req, res, next) {
  next(createError(404));
});


// =========================
// Error Handler
// =========================

app.use(function (err, req, res, next) {

  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {};

  res.status(err.status || 500);

  res.render('error');
});


module.exports = app;