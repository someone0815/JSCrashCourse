var mongoose = require('mongoose');

// Todos Schema
var todoSchema = mongoose.Schema({
  userId: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: 'Default Todo Title',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

var Todo = (module.exports = mongoose.model('Todo', todoSchema));

// Get Todos
module.exports.getTodos = (callback, limit) => {
  Todo.find(callback).limit(limit);
};

// Get Todo
module.exports.getTodoById = (id, callback) => {
  Todo.findById(id, callback);
};

// Add Todo
module.exports.addTodo = (todo, callback) => {
  Todo.create(todo, callback);
  console.log(`Added '${todo.title}'`);
};

// Update Todo
module.exports.updateTodo = (id, todo, options, callback) => {
  var query = { _id: id };
  var update = {
    userId: todo.userId,
    title: todo.title,
    completed: todo.completed,
  };
  Todo.findOneAndUpdate(query, update, options, callback);
  console.log(
    `[${todo._id}] Set '${todo.title}' to ${
      todo.completed ? 'complete' : 'uncomplete'
    }`
  );
};

// Delete Todo
module.exports.removeTodo = (id, callback) => {
  var query = { _id: id };
  Todo.deleteOne(query, callback);
  console.log(`[${id}] Deleted`);
};
