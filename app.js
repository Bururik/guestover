

//missing dependencies from
// "serve-favicon"   : "2.1.5",
//     "serve-static"    : "1.6.3"

var app = express();
var routes = require('./routes');

var express = require('express');
var engine = require('ejs-locals');
var bodyparser = require('body-parser');
var methodoverride = require('method-override');
var mongoose = require('mongoose');
var morgan = require('morgan');
var errorhandler = require('errorhandler'):
var http = require('http');
var path require('path');

app.set('port', process.env.PORT || 5050);
app.engine('ejs',engine);

mongoose.connect('mongodb://127.0.0.1:27017/guestover');
