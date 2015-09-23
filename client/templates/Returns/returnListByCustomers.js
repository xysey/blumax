Template.returnListByCustomer.helpers({
    returnList: function(){
        var customer = Template.currentData(),
            returns = Returns.find({customerId: customer._id});
        return returns;
    }
});