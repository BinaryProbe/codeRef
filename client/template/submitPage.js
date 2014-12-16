Template.postSubmit.events({
  'submit form': function(e) {
			
    e.preventDefault();
  	var post = {
    	url : $(e.target).find('[name=url]').val(),
    	title : $(e.target).find('[name=title]').val(),
    	category : $(e.target).find('[name=category]').val(),
  	};
		
		if( post.title == "" || post.url== ""){
			alert(" Fill in title & url first " );
			return;
		}
		
 		Meteor.call('postInsert', post, function(error, result) {
    	if (error)
      	return alert(error.reason);
    	if (result.postExists){
        alert('This link has already been posted');
				return;
			}
			var todo = { 
				postId : result._id,
				contents : $(e.target).find('[name=comment]').val(),
				checked : false
			};	
			
			Meteor.call('todoInsert', todo, function(error,result) { 
				if(error)
					return alert(error.reason);
			});
    	Router.go('postPage', {_id: result._id});
  	});
	
  }
});

Template.postSubmit.helpers({
	categories : function() { 
		return Categories.find({});
	}
});



