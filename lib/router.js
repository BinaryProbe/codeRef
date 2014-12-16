Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts');}
});

Router.route('/' , {name : 'postsList'});
Router.route('/posts/:_id', {
   name : 'postPage',
	 waitOn: function(){ return Meteor.subscribe('todos', this.params._id);},
   data : function() { return Posts.findOne(this.params._id);}
});
Router.route('/submit', {name : 'postSubmit'});
Router.route('/setfilter', {name : 'postFilter'});
Router.route('/filtered/:_id', { 
	name : 'filteredPage',
	data : function() { return Categories.findOne(this.params._id);}
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if( Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only:'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(requireLogin, {only: 'postFilter'});
