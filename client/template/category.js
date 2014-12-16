Template.category.helpers({
	isCurrentCategory : function() { 
		var categoryName = Session.get("currentCategory");
		if( categoryName == null ) 
			categoryName = "None";
		if (categoryName == this.name)
			return true;
		return false; 
	}
});
