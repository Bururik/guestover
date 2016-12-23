var mongoose = require('mongoose');

var gsbSchm = mongoose.Schema({
    user : String,
    message : String,
    date : Date
});

mongoose.model( 'Usr', gsbSchm );
