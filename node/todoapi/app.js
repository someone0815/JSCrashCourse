var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

Todo = require('./models/todo');

var fs = require('fs');
var key = fs.readFileSync('key.txt', 'utf8');

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/todo');
var db = mongoose.connection;

// https://dzone.com/articles/cors-in-node
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Please use /api/todos');
});

app.get('/api/todos', (req, res) => {
  const limit = req.query.limit === undefined ? 200 : req.query.limit;
  Todo.getTodos((err, todos) => {
    if (err) {
      throw err;
    }
    res.json(todos);
    console.log(`Returned ${todos.length} todos. (limited to ${limit})`);
  }, parseInt(limit));
});

app.get('/api/todos', (req, res) => {
  Todo.getTodos((err, todos) => {
    if (err) {
      throw err;
    }
    // returnData = todos.slice(0, req.query.limit);
  });
});

app.get('/api/todos/:_id', (req, res) => {
  Todo.getTodoById(req.params._id, (err, todo) => {
    if (err) {
      throw err;
    }
    res.json(todo);
  });
});

app.post('/api/todos/:key', (req, res) => {
  if (req.params.key != key) {
    console.log(`catched wrong key in post`);
    return res.status(400).send();
  }
  var todo = req.body;
  Todo.addTodo(todo, (err, todo) => {
    if (err) {
      throw err;
    }
    res.json(todo);
  });
});

app.put('/api/todos/:_id&:key', (req, res) => {
  if (req.params.key != key) {
    console.log(`catched wrong key in put`);
    return res.status(400).send();
  }
  var id = req.params._id;
  var todo = req.body;
  Todo.updateTodo(id, todo, {}, (err, todo) => {
    if (err) {
      throw err;
    }
  });
  res.json(todo);
});

app.delete('/api/todos/:_id&:key', (req, res) => {
  if (req.params.key != key) {
    console.log(`catched wrong key in delete`);
    return res.status(400).send();
  }
  var id = req.params._id;
  Todo.removeTodo(id, (err, todo) => {
    if (err) {
      throw err;
    }
    res.json(todo);
  });
});

app.listen(3000);
console.log('Running on port 3000');
