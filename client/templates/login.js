Template.login.events({
    'submit form': function (event) {
        event.preventDefault();
        var userName = event.target.username.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(userName,password,function(err){
            if(!err) {
                Router.go('/');
            }else{
                alert('!');
                console.log(password);
                console.log(userName);
            }
        });
    }
});