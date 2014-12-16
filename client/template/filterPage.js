Template.postFilter.helpers({
	categories : function() { 
		return Categories.find({});
	}
});

Template.postFilter.events({
	'change select#category' : function(e) { 
		var categoryName = $("select#category").val();
		//var categoryName = $(e.target).parent().find('[name=category]').val();
		Session.set("currentCategory", categoryName); 
		console.log("Current Category Name updated to :" + categoryName);
		Router.go('/');
	}
});
