import { Random } from 'meteor/random';

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});

Router.route('/', function () {
    this.render('home', {});
});
Router.route('/whiteboard/:id', function () {
	Session.set('sessionId', this.params.id);
    this.render('whiteboard', {});
});
Router.route('/whiteboard/', function () {
    const sessionId = Random.id();
    Whiteboards.insert({_id: sessionId});
    this.redirect('/whiteboard/' + sessionId);
});