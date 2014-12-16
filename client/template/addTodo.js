Template.postContents.events({
	"click input#todo" : function(event) {
		var text = $('textarea#todo').val();
		var todo = { 
			postId : this._id, 
			contents : text,
			checked : false
		};
		console.log("trying to submit new Todo :"+ todo.contents);
		Meteor.call('todoInsert', todo, function(error,result) { 
			if (error)
				return alert(error.reason);
			console.log("Todo add completed");
			$('textarea#todo').val('');
		});
		
		// touch its post to locate it at top on the list.
		Meteor.call('touchPost', todo, function(error) {
			console.log("Todo is trying to touch its original post"); 
		});
	}
});
