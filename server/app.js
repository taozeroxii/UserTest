var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//สร้างตัวแปรเพื่อเรียกใช้ไฟล์ Router ที่สร้างไว้
var indexRouter = require('./routes/indexRoutes');
var usersRouter = require('./routes/usersRoutes');
var chartRoutes = require('./routes/chartRoutes');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//MONGO CONNECT
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopper');
mongoose.Promise = global.Promise;


//Manage URI 
//app.use('/', indexRouter);//Root part ไม่กำหนดพิมlocalhostจะมาindexเลย
app.use('/index', indexRouter);//กำหนด หากพิม localhost/index จะไปหน้าindex
app.use('/users', usersRouter);
app.use('/testchart', chartRoutes);

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
