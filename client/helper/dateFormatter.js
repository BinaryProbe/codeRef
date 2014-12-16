var DateFormats = {
       short: "MM/YY/DD hh:mm",
       long: "YYYY-MM-DD HH:mm:ss"
};

UI.registerHelper("normalizeDate", function(createdAt, option) {
		var f = DateFormats[option];
		if(createdAt)
			return moment(createdAt).format(f);
});
