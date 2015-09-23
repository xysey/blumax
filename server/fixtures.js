var gCount = Gallons.find().count();


if (gCount === 0) {
    Gallons.insert({
        branch: 'main',
        remainingContainer: 100,
        remainingDispenser: 100,
        totalGallons: 200,
        outContainer: 0,
        outDispenser: 0,
        totalOut: 0,
        totalGallonsOrdered: 0,
        totalContainersOrdered: 0,
        totalDispensersOrdered: 0
    });
}

//for users

Meteor.startup(function() {
    if (Meteor.users.find().count() < 1) {
        var admins = [{
            firstName: 'Tyrion',
            lastName: 'Lannister',
            address: "King's Landing",
            userName: 'tyrion_L',
            email: 'tyrion@mailinator.com',
            password: 'hear_me_roar',
            roles: ['admin']
        }, {
            firstName: 'Justine',
            lastName: 'Bieber',
            address: "Canada",
            userName: 'justine_biebe',
            email: 'justineBieb@mailinator.com',
            password: 'baby_baby_oh!',
            roles: ['staff']
        }, {
            firstName: 'Adrienne',
            lastName: 'Gumobao',
            address: "Bancal, Guagua, Pampanga",
            userName: 'dark_joy',
            email: 'aj@mailinator.com',
            password: 'joy22',
            roles: ['admin']
        }];

        _.each(admins, function(userData) {
            var userId = Accounts.createUser({
                username: userData.userName,
                password: userData.password,
                email: userData.email,
                profile: {
                    name: userData.firstName + ' ' + userData.lastName,
                    address: userData.address
                }
            });
            Meteor.users.update({
                _id: userId
            }, {
                $set: {
                    'emails.0.verified': true
                }
            });
            Roles.addUsersToRoles(userId, userData.roles);
        });
    }
});
