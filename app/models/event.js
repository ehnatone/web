console.log('Running event.js');
// app/models/event.js
// grab the mongoose module
var mongoose = require('mongoose');
console.log("/app/models/event.js export")
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Event', {
    name : {type : String, default: ''}
});
