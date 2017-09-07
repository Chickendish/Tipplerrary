//======================================
// 			Dependencies
//======================================

var express = require('express');
var exphbs	= require('express-handlebars');
var app = express();

var PORT = 5000;


//======================================
// 			Routes
//======================================

/* 		Middleware - comes before routes
		and looks here first           */

app.use(express.static('public'));
app.set('views', './src/views');


var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req,res){
	res.render('index', {});
});

//======================================
//			Start the server
//======================================

app.listen(PORT, function(err){
	console.log('App listening on port:' + PORT);
});