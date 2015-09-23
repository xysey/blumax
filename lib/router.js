var OnBeforeAction;

OnBeforeAction = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            this.render('login');
            pause();
        } else {
            this.next();
        }
    }
};

Router.onBeforeAction(OnBeforeAction.loginRequired, {
    only: ['addcustomer',
        'newOrder/:_id',
        'editCustomer/:_id',
        'viewCustomer/:_id',
        'orderList/customer/:_id',
        'allOrderList',
        'allReturnList',
        'returnGallons/:_id',
        'returnList/customer/:_id',
        'allCustomers'

    ]
});

Router.route('/', {
    action: function() {
        this.render('blumax');
    },
    layoutTemplate: 'app',
    onBeforeAction: function() {
        if (!Meteor.userId()) {
            this.render('login');
            // return pause();
        } else {
            this.next();
        }

    }
});

Router.route('/addcustomer', {
    action: function() {
        this.render('addCustomer');
    },
    layoutTemplate: 'app'
});


Router.route('/newOrder/:_id', {
    action: function() {
        this.render('newOrder', {
            data: function() {
                return Customers.findOne({
                    _id: this.params._id
                });
            }
        });
    },
    layoutTemplate: 'app'
});

Router.route('/editCustomer/:_id', {
    action: function() {
        this.render('editCustomer', {
            data: function() {
                return Customers.findOne({
                    _id: this.params._id
                });
            }
        });
    },
    layoutTemplate: 'app'
});

Router.route('/viewCustomer/:_id', {
    action: function() {
        this.render('viewCustomer', {
            data: function() {
                return Customers.findOne({
                    _id: this.params._id
                });
            }
        });
    },
    layoutTemplate: 'app'
});

Router.route('/orderList/customer/:_id', {
    action: function() {
        this.render('orderListCustomer', {
            data: function() {
                return Customers.findOne({
                    _id: this.params._id
                });
            }
        });
    },
    layoutTemplate: 'app'
});

Router.route('/allOrderList', {
    action: function() {
        this.render('allOrderList', {
            data: function() {
                return Orders.find({}, {
                    sort: {
                        orderAt: -1
                    }
                });
            },

        });
    },
    layoutTemplate: 'app'
});

Router.route('/allReturnList', {
    action: function() {
        this.render('allReturnList', {
            data: function() {
                return Returns.find({}, {
                    sort: {
                        returnAt: -1
                    }
                });
            },

        });
    },
    layoutTemplate: 'app'
});

Router.route('/returnGallons/:_id', {
    action: function() {
        this.render('returnGallonsByCustomer', {
            data: function() {
                return Customers.findOne({
                    _id: this.params._id
                });
            }
        });
    },
    layoutTemplate: 'app'
});

Router.route('/returnList/customer/:_id', {
    action: function() {
        this.render('returnListByCustomer', {
            data: function() {
                return Customers.findOne({
                    _id: this.params._id
                });
            }
        });
    },
    layoutTemplate: 'app'
});

Router.route('/allCustomers', {
    action: function() {
        this.render('viewAllCustomers', {
            data: function() {
                return Customers.find();
            }
        });
    },
    layoutTemplate: 'app'
});
