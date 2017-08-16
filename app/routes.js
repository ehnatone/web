console.log('Running routes.js' + __dirname);
 // app/routes.js

console.log("approtes.js -  grab the event model we just created");
    var Event = require('./models/event');


    module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
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
	res.redirect('/');
});

};
