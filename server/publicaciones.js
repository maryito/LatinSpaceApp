Meteor.publish('Api.todo', function() {

    
    return data
});

Meteor.publish('Api.inicial', function( max) {
    return Api.find({}, { limit: max })
});


Meteor.publish('Deslizamiento.nuevo', function( ) {
    return Deslizamientos.find({})
});
 

 
