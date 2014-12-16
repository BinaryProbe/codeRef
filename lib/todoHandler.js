Todos = new Mongo.Collection("todos");

Meteor.methods({
  todoInsert: function(todoAttributes) {
    check(Meteor.userId(), String);
    check(todoAttributes, {
      postId: String,
      contents: String,
			checked: Boolean
    });

    var user = Meteor.user();
    var todo = _.extend(todoAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var todoId = Todos.insert(todo);
    return {
      _id: todoId
    };
  },

	todoDelete : function(todo) {
		Todos.remove(todo._id);
	},

	todoUpdate : function(todo) { 
		Todos.update(todo._id, {$set: {checked: !todo.checked}} );
	}
});
