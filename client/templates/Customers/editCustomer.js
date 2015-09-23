Template.editCustomer.helpers({

});

Template.editCustomer.events({
    'submit form': function(e) {
        e.preventDefault();
        var customer = Template.currentData(),
            name = e.target.name.value,
            address = e.target.address.value;

        if (!name) {
            alert('a customer has a name!');
            return;
        } else if (!address) {
            alert('a customer has an address!')
        } else {
            var choice = confirm('You have edited ' + name + '  data, if all data is correct click OK otherwise CANCEL');
            if (!choice) {
                return;
            }
            Customers.update({
                _id: customer._id
            }, {
                $set: {
                    name: name,
                    address: address,
                    updatedBy: Meteor.userId(),
                    updatedAt: new Date()
                }
            });
            alert("Customer's data has been updated");
            Router.go("/viewCustomer/" + customer._id);

        }
    }
});
