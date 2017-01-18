require('./models/guestposts');

var port = process.env.PORT || 8080;
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
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var routes = require('./routes');

var db = process.env.MONGO_URI || 'mongodb://localhost/guestover';
mongoose.connect(db);
require('./config/passport')(passport);

app.engine('ejs',engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(methodoverride());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'ohmygodthisisamazballslookatthem' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);


app.get('/main', routes.main);
app.post('/create', routes.create);
app.get('/destroy/:id', routes.destroy);
app.get('/edit/:id', routes.edit);
app.post('/update/:id', routes.update);

http.createServer(app).listen(port,() => {
    console.log('Throwdown at ' + port);
});
