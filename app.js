
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var util = require('util');
var nodedump = require('nodedump');
var moment = require('moment');
var dh = require('./public/javascripts/dateHelpers');
//var i18n = require("i18n");

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(i18n.init);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(require('less-middleware')({ src: __dirname + '/public' }));

//app.use(express.logger());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
//app.use(express.static(path.join(__dirname, 'public/font-awesome')));
//app.use(express.static(path.join(__dirname, 'node_modules/jQuery')));

// development only
if ('development' == app.get('env')) {
  //app.set('view options', { pretty: true }); // Express 2.x
  app.locals.pretty = true;
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

/*i18n.configure({
  locales: ['en', 'fr'],
  directory: __dirname + '/locales'
});*/

//app.get('/', routes.index);
app.get('/', function(req, res){
  res.render('index.jade');
});

//app.get('/users', user.list);

// Don't understand routing, just want to be able to load any view I deem fit
app.get(/\/.*/, function(req, res, next) { 
  //debugger;
  var file = path.join(path.join(__dirname, 'views'), req.url);
  app.locals.moment = moment;
  app.locals.env = process.env;
  app.locals.dateHelpers = dh;

  res.render(file, { } );
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
