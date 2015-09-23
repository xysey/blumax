Template.regularCustomers.onRendered(function() {
    this.$('[data-toggle=tooltip]').tooltip();
});

Template.regularCustomers.helpers({
    customerList: function() {
        return Customers.find({
            totalOrders: {
                $gt: 49
            }
        }, {
            sort: {
                totalOrders: -1
            }
        });
    }
});
