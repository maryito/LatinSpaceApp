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
  clientId: '8732432343841634324-234239j7df91mg5a8232wq75cgdsff38ekoj.apps.googleusercontent.com',
  secret: 'e8sdf4dsST-VfsdSAXUh8HHSSWLJDSJ'
});

Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});