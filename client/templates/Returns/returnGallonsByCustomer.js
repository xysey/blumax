Template.returnGallonsByCustomer.events({
    'submit form': function(e) {
        e.preventDefault();
        var staff = Meteor.users.findOne({
                _id: Meteor.userId()
            }),
            containers = parseInt(e.target.containersToReturn.value),
            dispensers = parseInt(e.target.dispensersToReturn.value),
            total = containers + dispensers;
        customer = Template.currentData(),
            gallons = Gallons.findOne({
                branch: 'main'
            });
        if ((containers < 0) || (dispensers < 0)) {
            alert('Gallons to return must not be less than 0');
            return;
        }
        var choice = confirm("Customer: " + customer.name + " will return\nDispenser: " + dispensers + "\nContainer: " + containers + "\nclick OK to proceed");


        if (!choice) {
            return;
        } else {
            Gallons.update({
                _id: gallons._id
            }, {
                $inc: {
                    remainingContainer: containers,
                    remainingDispenser: dispensers,
                    totalGallons: total,
                    outContainer: -containers,
                    outDispenser: -dispensers,
                    totalOut: -total
                }
            });

            Customers.update({
                _id: customer._id
            }, {
                $inc: {
                    currentNumOfContainers: -containers,
                    currentNumOfDispensers: -dispensers,
                    currentTotalOfGallons: -total
                }
            });

            Returns.insert({
                numOfContainers: containers,
                numOfDispensers: dispensers,
                total: total,
                customerName: customer.name,
                customerId: customer._id,
                staffName: staff.profile.name,
                staffId: staff._id,
                returnAt: new Date()
            });
            alert('Return has made!');
            Router.go('/');
        }
    }
});
