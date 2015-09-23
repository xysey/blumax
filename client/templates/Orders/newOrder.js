Template.newOrder.helpers({
});

Template.newOrder.events({
    'submit form': function(e) {
        e.preventDefault();
        var staff = Meteor.users.findOne({
            _id: Meteor.userId()
        }),
        gallons = Gallons.findOne({
            branch: 'main'
        }),
        maxC = gallons.remainingContainer,
        maxD = gallons.remainingDispenser;

        var customer = Template.currentData(),
            totalD = parseInt(e.target.orderDispenser.value),
            totalC = parseInt(e.target.orderContainer.value),
            totalOrder = totalD + totalC;
        if ((totalD < 0) || (totalC < 0)) {
            alert('The orderes number of type containers or dispensers should not be less than 0');
            return;
        } else if (totalD > maxD){
            alert('The ordered number of type dispenser exceeded the remaining stock gallons for it');
            return;
        } else if (totalC > maxC){
            alert('The ordered number of type container exceeded the remaining stock gallons for it');
            return;
        }

        var choice = confirm("Please review the order if it's correct click OK otherwise CANCEL \nCustomer 's name: " + customer.name + ' ' + '\nContainer/s : ' + totalC + '\nDispenser/s : ' + totalD + '\nTotal : ' + totalOrder);


        if (choice) {
            Orders.insert({
                orderAt: new Date(),
                staffId: staff._id,
                staffName: staff.profile.name,
                customerId: customer._id,
                customerName: customer.name,
                totalOrder: totalOrder,
                totalContainer: totalC,
                totalDispenser: totalD
            });

            Customers.update({
                _id: customer._id
            }, {
                $inc: {
                    totalOrders: totalOrder,
                    totalDispenserOrders: totalD,
                    totalContainerOrders: totalC,
                    currentNumOfContainers: totalC,
                    currentNumOfDispensers: totalD,
                    currentTotalOfGallons: totalOrder
                },
                $set: {
                    latestDateOfOrder: new Date()
                }
            });

            Gallons.update({
                _id: gallons._id
            }, {
                $inc: {
                    remainingContainer: -totalC,
                    remainingDispenser: -totalD,
                    totalGallons: -totalOrder,
                    outContainer: totalC,
                    outDispenser: totalD,
                    totalOut: totalOrder
                }
            });

            alert('Order has been made');
            Router.go('/');
        }
    },
    'click .btn-warning': function() {
        Router.go('/');
    }
});
