var Backbone = require('backbone');
var views = require('./views/todo');
var TodoCollection = require('./models/todo').TodoCollection;
var $ = require('jquery');

var todoCollection = new TodoCollection();

var instructions = new views.TodoInstructionsView();

$('.app').append(instructions.render().el);

var todoList = new views.TodoListView({'collection': todoCollection});
$('.app').append(todoList.render().el);

todoCollection.add([
  {'title':'Learn some stuff'},
  {'title': "feed the dog"}
]);
