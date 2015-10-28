var express = require('express');
var app = express();

//set up ejs
app.set('view engine', 'ejs');

//public folder 
app.use(express.static(__dirname +'/public'));

//routing

app.get('/', function(req,res){
	res.render('editor');
});

//start the server
var port = process.env.PORT || 3000;
app.listen(port);