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
app.use(express.static('src', 'views'));

app.get('/', function(req,res){
	res.send("hello world");
});

//======================================
//			Start the server
//======================================

app.listen(PORT, function(err){
	console.log("App listening on port:" + PORT);
});