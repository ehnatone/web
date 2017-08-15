// server.js
console.log("// server.js");

// initialization ===========================================
console.log("// initialization ===========================================");

// load modules
console.log("// load modules");

var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
    
// load database configuration
console.log("// load database configuration")
var db = require('./config/db.conf');

//connect to mongoDB database 
console.log("// connect db");
mongoose.connect(db.url); 

// load configuration
console.log("// load configuration");
var conf = require('./config/server.conf')

//set up logging
console.log("//set up logging");

app.all("*", function(req, res, next){
	var timestring=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        console.log(timestring + ": Request [" + req.method + " " + req.url + " (" + (req.headers['x-real-ip'] || req.ip) + ")]"); 
	next();
	}
);

// parse application/json 
console.log("// parse application/json");
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
console.log("// parse application/vnd.api+json as json");
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
console.log("// parse application/x-www-form-urlencoded");
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
console.log("// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT");
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
console.log("// set the static files location /public/img will be /img for users");
app.use(express.static(__dirname + '/public')); 

console.log("// routes ==================================================");

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
console.log("// start app ===============================================")

//shoutout to the user
app.listen(conf.port, conf.hostname);                                    
console.log('Server started on port ' + conf.port + ', host:'+conf.hostname);

// expose app           
exports = module.exports = app;  
