var Backbone = require('backbone');


var Todo = Backbone.Model.extend({

});

var TodoCollection = Backbone.Collection.extend({
  model: Todo
});

module.exports = {
  'Todo': Todo,
  'TodoCollection': TodoCollection
};
