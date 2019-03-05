var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// var cookieParser = require('cookie-parser');
// var session = require('express-session');
// var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var configDB = require('./config/database');
console.log(configDB.url);
mongoose.connect(configDB.url,{ useNewUrlParser: true });

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// app.use(cookieParser());

// app.use(session({secret: 'anystringoftext',
// 				 saveUninitialized: true,
// 				 resave: true}));

app.set('view engine', 'ejs');


// app.use('/', function(req, res){
// 	res.send('Our First Express program!');
// 	console.log('========cookies========');
// 	console.log(req.cookies);
// 	console.log('=======session=========');
// 	console.log(req.session);
// });

require('./app/routes.js')(app);

app.listen(port);
console.log('Server running on port: ' + port);



