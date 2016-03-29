var express =  require('express');
var app  = express();
var mongojs = require('mongojs');

//Select bucket of mongoDB
var dbResidencia = mongojs('dbresidencia', ['dbresidencia']); 

//Administrator of version
var contactRouterFunction = require('./routes/api/v1.js');
var contactRouterV1 = contactRouterFunction.module(dbResidencia);

app.use('/api/v1/', contactRouterV1);

//Open the connection port in nodejs , and report your parameters

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log("API Residencia listening at http://%s:%s", host, port);
});