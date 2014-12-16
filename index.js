var express=require('express');

//Constants
var DEFAULT_PORT=8080;
var PORT=process.env.PORT || DEFAULT_PORT;

var app=express();

app.get('/',function(req,res){
	res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:'+PORT);

