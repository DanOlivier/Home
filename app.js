
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

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(require('less-middleware')({ src: __dirname + '/public' }));

//app.use(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/font-awesome')));
//app.use(express.static(path.join(__dirname, 'node_modules/jQuery')));

// development only
if ('development' == app.get('env')) {
  //app.set('view options', { pretty: true }); // Express 2.x
  app.locals.pretty = true;
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

//app.get('/', routes.index);
app.get('/', function(req, res){
  res.render('index.jade');
});

//app.get('/users', user.list);

// Don't understand routing, just want to be able to load any view I deem fit
app.get(/\/.*/, function(req, res, next) { 
  //debugger;
  var file = path.join(path.join(__dirname, 'views'), req.url);
  res.render(file, { env: process.env } );
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
