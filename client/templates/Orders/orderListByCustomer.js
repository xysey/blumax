Template.orderListCustomer.helpers({
    orderList: function(){
        var customer = Template.currentData(),
            orders = Orders.find({customerId: customer._id});
        return orders;
    }
});