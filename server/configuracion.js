ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '592094480985863',
    secret: 'fbc5502494d996daa018f1ce43fd6ec2'
});

ServiceConfiguration.configurations.remove({
    service: "google"
});
ServiceConfiguration.configurations.insert({
    service: 'google',
    clientId: '70399859572-oiqp836ptu0v2a0vahgbnl0ir1n3211l.apps.googleusercontent.com',
    secret: 'YYBZR-1lGk8j2LQxHE3q3si-'
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