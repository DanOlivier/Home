var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var util = require('util');
var nodedump = require('nodedump');
var moment = require('moment');
var i18n = require('i18next');
var JSON = require('JSON');
var jade = require('jade');

var svg = require('./public/javascripts/svg');

i18n.init({
  saveMissing: true,
  debug: true,
  detectLngQS: 'lang',
  lng: 'fr-CA',
  preload: ['en', 'fr'],
  supportedLngs: svg.supportedLngs(),
  fallbackLng: false
  //??? ignoreRoutes: ['images/', 'public/', 'css/', 'js/']
} 
/*function(t) {
    i18n.addRoute('/:lng/CV', ['en', 'fr'], app, 'get', function(req, res) {
      // res.send(...);
    }
  }*/
);

var app = express();

// all environments
app.set('port', process.env.PORT || 3001); // port 8080 is used by the (node-inspector) debugger
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

//app.get('/users', user.list);
i18n.registerAppHelper(app)

// Jade will have access to these
app.locals.moment = moment;
app.locals.env = process.env;
app.locals.dateHelpers = require('./public/javascripts/dateHelpers');
app.locals.svg = svg;
app.locals.JSON = JSON
app.locals.fs = fs
app.locals.nodedump = nodedump.dump;
app.locals.jade2 = jade; // Let's hope jade is "re-entrant"

// Both of these work, but which is better?
app.locals.require1 = require

app.use(function(req, res, next) {
  res.locals.require2 = require;
  next();
});

// Can help to validate changes in these files
//var ts = require('./data/technicalSkills.js')
//var ts = require('./data/workExperiences.js')

// Don't understand routing, just want to be able to load any view I deem fit
app.get(/^\/(.+)?\??/, function(req, res, next) { 

  var match = /(.{2})(-.{2})?/.exec(req.language)

  var filename = (req.params[0] || "index") + '.jade';
  var file = path.join(__dirname, 'views', match[1], filename);
  if(!fs.existsSync(file)) {
    file = path.join(__dirname, 'views', filename);
    if(!fs.existsSync(file)) {
      next();
    }
  }
  moment.lang(req.language);
  var now = moment();
  console.log('Lang for req.url: (' + req.language + ') ' + moment( now ).format('LLLL'))
  
  res.render(file, { currentUrl: req.path });
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