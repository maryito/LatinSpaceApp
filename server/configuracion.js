ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: Meteor.settings.private.facebook.appId,
    secret:  Meteor.settings.private.facebook.secret
});

ServiceConfiguration.configurations.remove({
    service: "google"
});
ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: Meteor.settings.private.google.clientId,
    secret:  Meteor.settings.private.google.secret
});

Accounts.onCreateUser(function (options, user) {

    if (user.services.facebook) {
        user.username = user.services.facebook.name;
        user.emails = [{ address: user.services.facebook.email }];

        return user;
    }
    if (user.services.google) {
        console.log(user );
         user.username = user.services.google.name;
         user.emails = [{address: user.services.google.email}];

        return user;
    }
    return user;
});