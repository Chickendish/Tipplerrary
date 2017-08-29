//======================================
// 			Dependencies
//======================================

var express = require('express');
var exphbs	= require('express-handlebars');
var app = express();

var PORT = 5000;

//======================================
//			Middleware
//======================================

app.use(epress.static('public'));

//======================================
// 			Routes
//======================================

app.get('/', function(req,res){
	res.send("hello world");
});

//======================================
//			Start the server
//======================================

app.listen(PORT, function(err){
	console.log("App listening on port:" + PORT);
});