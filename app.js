
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
var i18n = require('i18next');

i18n.init({
  saveMissing: true,
  debug: true,
  detectLngQS: 'lang',
  preload: ['en', 'fr']
});


var app = express();

// all environments
app.set('port', process.env.PORT || 3001); // port 8080 is used by the debugger
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(i18n.handle);

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

//app.get('/', routes.index);

app.get('/', function(req, res){
  moment.lang(req.language);
  //i18n.setLng(req.language);
  console.log('Lang for index: ' + req.language)
  res.render('index.jade');
});

//app.get('/users', user.list);
i18n.registerAppHelper(app)

app.locals.moment = moment;
app.locals.env = process.env;
app.locals.dateHelpers = dh;

// Don't understand routing, just want to be able to load any view I deem fit
app.get(/^\/(.+)\??/, function(req, res, next) { 
  //debugger;
  var file = path.join(path.join(__dirname, 'views'), req.params[0]);

  moment.lang(req.language);
  var now = moment();
  console.log('Lang for req.url: (' + req.language + ') ' + moment( now ).format('LLLL'))
  res.render(file);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/*i18n.serveClientScript(app)      // grab i18next.js in browser
  .serveDynamicResources(app)    // route which returns all resources in on response
  .serveMissingKeyRoute(app)     // route to send missing keys
  .serveChangeKeyRoute(app)      // route to post value changes
  .serveRemoveKeyRoute(app);     // route to remove key/value
*/