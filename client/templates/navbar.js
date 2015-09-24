Template.navbar.helpers({
    userName: function() {
        if (Meteor.user()) {
            return Meteor.user().userName;
        }
        return '';
    },

    log: function(){
        if(Meteor.user()){
            return true;
        }
        return false;
    }
});

Template.navbar.events({
    'click #logout': function() {
        return Meteor.logout();
    }
});
