Template.postsList.helpers({
  posts: function(){
    return Posts.find({}, {sort : {lastupdate: -1 }});
  },
	
	isCategoryMatch : function() { 
		var currentCategory = Session.get("currentCategory");
		if (currentCategory == null) 
			return true;
		if (currentCategory === "None")
			return true;
		if( this.category === currentCategory) 
			return true;
		else
			return false;
	},

	hasCategory : function () { 
		var currentCategory = Session.get("currentCategory");
		if(currentCategory == null)
			return false;
		if(currentCategory === "None")
			return false;
		return true;
	},

	category : function () { 
		return Session.get("currentCategory");
	}
});

