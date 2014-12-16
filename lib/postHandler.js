Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String,
			category: String
    });

    // to prevent duplicated submit
    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
			lastupdate: new Date()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  },

	touchPost: function(todo) {
		check(Meteor.userId(),String);
		Posts.update({_id:todo.postId} , {$set: {lastupdate: new Date()}} );
	}
			
});

