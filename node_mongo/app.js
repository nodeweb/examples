var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var settings = require('./models/settings');
var Session = require('express-session');
var flash = require('connect-flash');
var http = require('http');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// create redis session

var RedisStore = require('connect-redis')(Session);
var Options = {
     "host": "127.0.0.1",
     "port": "6379",
     "ttl": 60 * 60 * 12,   //Session的有效期为12小时
};
var session = Session({
    secret:settings.secret,
    saveUninitialized: true,
    resave: true,
    key:settings.key,
    cookie: { domain:'.jiuzhouauto.com',maxAge:1000*60*60*12 },
    store:new RedisStore(Options)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session);
app.use(flash());
app.use(express.query());

// set header
app.use(function(req,res,next){
  res.set({'X-Powered-By':'X-Ui'});
  next();
});

// start router
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// set mongodb
mongoose.connect(settings.url);

mongoose.connection.on('error', function (err) {
  console.log('Error!! Mongoose Connection failed!');
});

mongoose.connection.on('open',function(err){
    if(err) throw err;
    console.log('Mongoose Connection to basedata!');
    // start server
    http.createServer(app).listen(3838,function(){
       console.log('Http Listening At Port 3838!');
    });
});
