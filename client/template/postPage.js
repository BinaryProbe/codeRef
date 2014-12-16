Template.postPage.helpers({
	todoList : function() { 
		return Todos.find({postId:this._id},{sort: {submitted: 1}});
	}
});
