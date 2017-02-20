var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.get('/', function (req, res){
	res.send('TODO API Root');
});

// GET /todos
app.get('/todos', function(req,res){
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	//iterate over todos array. find the math
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

// POST /todos
app.post('/todos', function(req, res){
	var body = req.body;

	console.log('description: ' + body.description);

	res.json(body);

});

app.listen(PORT, function () {
	console.log('express listening one port ' + PORT + '!');
});  