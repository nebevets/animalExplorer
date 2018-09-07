//require the animals.js file from the data folder, store it in a variable
const animals = require('./data/animals.js');
//require express
const express = require('express');
//make the server
const server = express();
//add the static folder and point it at the html folder
server.use(express.static(__dirname + '/html'));

//make an endpoint to get data for all animals
	//return the animals data
server.get('/data', (request, response)=>{
	console.log('got a request for data');
    response.send(JSON.stringify(animals));
});
//make the server listen for connections on port 3000
server.listen(3000, ()=>{
	console.log('listening on port 3000');
});