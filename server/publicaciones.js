Meteor.publish('Api.todo', function() {
    return Api.find({}, {
        $sort: { tstamp: 1 }
    })
});

Meteor.publish('Api.inicial', function( max) {
    return Api.find({}, { limit: max })
});


Meteor.publish('Deslizamiento.nuevo', function( ) {
    return Deslizamientos.find({})
});
 

 
