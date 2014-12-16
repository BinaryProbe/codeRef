Template.todo.events({
	"click a#delete" : function(event) { 
		if ( !confirm(" Are you sure you want to delete this Todo?" ) ) 
			return;
		Meteor.call('todoDelete' , this, function(error,result) {
			if(error)
				return alert(error.reason);
		});	
	},

	"click a#checked": function(event) { 
		var color;
		console.log(" ID to change " + this.checked);
		if(this.checked)
			color = '#BABBC2';
		else
			color = '#ffffff';
		$('#'+this._id).css('background-color',color);	
		
		Meteor.call('todoUpdate',this, function(error,result) {
			if(error)
				return alert(error.reason);
		});
	}
});

Template.todo.helpers({
	ownUser : function() { 
		if( !Meteor.user())
			return false;
		var currentUser = Meteor.user().username;
		console.log("currentUsername:" +currentUser);
		console.log("authour" + this.author);
		if( currentUser === this.author )
			return true;
		return false;
	},
	

});

