Template.home.helpers({
    whiteboards: function () {
    	return Whiteboards.find().fetch();
    }
});