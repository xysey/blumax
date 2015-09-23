Template.addStaff.events({
    'submit form': function(e) {
        e.preventDefault();
        var firstName = e.target.firstName.value,
            lastName = e.target.lastName.value;
    }
});
