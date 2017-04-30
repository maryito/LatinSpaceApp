

Meteor.methods({ 
    formularioAdd: function( data) { 
        check( data, Schemas.deslizamineto)

        return Deslizamientos.insert(data)
        console.log(" paso ");
        //  console.log(" data del formulario ", data);
    } 
});