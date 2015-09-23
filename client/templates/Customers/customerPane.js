Template.customerPane.helpers({
    searching: function() {
        return Session.get('searching');
    }
});

Template.customerPane.events({
    'click #search': function() {
        Session.set('searching', true);

    },
    'click #top': function() {
        Session.set('searching', false);

    },
});
