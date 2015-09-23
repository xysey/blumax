Template.addCustomer.helpers({

});

Template.addCustomer.events({
    'submit form': function(e) {
        e.preventDefault();
        var name = e.target.name.value,
            address = e.target.address.value,
            staff = staff = Meteor.users.findOne({
            _id: Meteor.userId()
        });

        if (!name) {
            alert('a customer has a name!');
            return;
        } else {
            Customers.insert({
                name: name,
                address: address,
                createdBy: staff.profile.name,
                createdById: staff._id,
                createdAt: new Date(),
                totalOrders: 0,
                totalContainerOrders: 0,
                totalDispenserOrders: 0,
                currentNumOfContainers: 0,
                currentNumOfDispensers: 0,
                currentTotalOfGallons: 0
            });
            var choice = confirm('Customer ' + name + ' has been added. Do you want to add more?');
            if (!choice) {
                Router.go('/');
            } else {
                e.target.name.value = '';
                e.target.address.value = '';
            }
        }
    }
});
