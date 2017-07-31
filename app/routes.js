console.log('Running routes.js');
 // app/routes.js

console.log("approtes.js -  grab the nerd model we just created");
    var Nerd = require('./models/nerd');
console.log("approtes.js -  grab the event model we just created");
    var Event = require('./models/event');


    module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
    	
        console.log("routing to : /api/nerds ");
        
        // use mongoose to get all nerds in the database
        
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error. 
        	
                            // nothing after res.send(err) will execute
            if (err)

                res.send(err);

            res.json(nerds); // return all nerds in JSON format
            
        });
        
    });

    app.get('/api/events', function(req, res) {

        console.log("routing to : /api/events ");

        // use mongoose to get all nerds in the database

        Event.find(function(err, events) {

            // if there is an error retrieving, send the error. 

                            // nothing after res.send(err) will execute
            if (err)

                res.send(err);

            res.json(events); // return all nerds in JSON format

        });

    });


    // route to handle creating goes here (app.post)
    
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    
    // route to handle all angular requests
    app.get('*', function(req, res) {
            var path = require('path');
            console.log("routing to * :", path.resolve('./public/index.html'));
	res.sendFile(path.resolve('./public/index.html')); // load our public/index.html file

    });

};
