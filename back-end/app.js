const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Connecto to MongoDB
mongoose.connect('mongodb://localhost/devops', { useNewUrlParser: true });
//We want to use mongo in different positions inside our code
mongoose.Promise = global.Promise; 

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//Error handling middleware
app.use(function(err, req, res, next){
	//console.log(err);
	res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, function(){
	console.log("I love you");
});