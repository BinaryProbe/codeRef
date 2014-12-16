Meteor.publish("posts", function(){
  return Posts.find();
});

Meteor.publish("categories", function(){ 
	return Categories.find();
});

Meteor.publish("todos", function(id) { 
	return Todos.find({postId:id});
});

