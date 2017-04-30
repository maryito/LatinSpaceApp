Meteor.publish('Api.todo', function() {

    
    return Api.find({})
});

Meteor.publish('Api.inicial', function( max) {
    return Api.find({}, { limit: max })
});


Meteor.publish('Deslizamiento.nuevo', function( ) {
    return Deslizamientos.find({})
});
 

 
