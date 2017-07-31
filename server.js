console.log('Running server.js');
// server.js
console.log("// server.js#"+process.env.port+"#"+process.env);

// initialization ===========================================
console.log("// initialization ===========================================");

// load modules
console.log("// load modules");

var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// load server configuration
console.log("// load server configuration")
var serverconf = require('./config/server.conf');    

// load database configuration
console.log("// load database configuration")
var dbconf = require('./config/db.conf');

//connect to mongoDB database 
console.log("// connect db");
mongoose.connect(dbconf.url, {user: dbconf.user, pass:dbconf.password}); 

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
// startup our app at http://localhost:8080
console.log("// start app ===============================================")
console.log("// startup our app at http://localhost:8080");

//shoutout to the user
console.log('Server starting on port ' + serverconf.tcp_port);
app.listen(serverconf.tcp_port);                                    
console.log('Server started on port ' + serverconf.tcp_port);
exports = module.exports = app;
