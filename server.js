var path = require('path'),
    express = require('express'),
    http = require('http');

var app = express();

// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options', { layout: false });

    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    var allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,X-Requested-With');

      // intercept OPTIONS method
      if ('OPTIONS' == req.method) {
        res.send(200);
      }
      else {
        next();
      }
    };
    app.use(allowCrossDomain);
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());

    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});


// Setup routes
require('./routes/routes')(app);


http.createServer(app).listen(3000, '127.0.0.1', function() {
    console.log("Express server listening on %s:%d in %s mode", '127.0.0.1', 3000, app.settings.env);
});
