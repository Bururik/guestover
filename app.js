require('./models/guestposts')
//require('./config/passport')(passport);

var port = process.env.PORT || 5050;
var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyparser = require('body-parser');
var methodoverride = require('method-override');
var mongoose = require('mongoose');
var morgan = require('morgan');
var errorhandler = require('errorhandler');
var http = require('http');
var path = require('path');
//var passport = require('passport');
var conflash = require('connect-flash');
var exsession = require('express-session');

var routes = require('./routes')/*(routes, passport)*/;

app.engine('ejs',engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(methodoverride());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(exsession({ secret: 'ohmygodthisisamazballslookatthem' }));
app.use(passport.initialize());
app.use(passport.exsession());
app.use(flash());

mongoose.connect('mongodb://127.0.0.1:27017/guestover');

app.get('/', routes.index);
app.post('/create', routes.create);
app.get('/destroy/:id', routes.destroy);
app.get('/edit/:id', routes.edit);
app.post('/update/:id', routes.update);

http.createServer(app).listen(port,() => {
    console.log('Throwdown at ' + port);
});
