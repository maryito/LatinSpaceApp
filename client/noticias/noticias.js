Template.noticias.onCreated( function() {
    Session.set('+Noticias', 15)
    // Meteor.subscribe('name', argument);
})

Template.noticias.helpers({
  ListaNoticias() {
      const aum = Session.get('+Noticias')
      return Deslizamientos.find({}, { limit: aum});
  },
  creador() {
      creador =  Meteor.userId();
      usu =  this.contribuidores.indexOf(''+Meteor.userId() )
      
      if ( usu !== 1 ){
          return true
      }else {
          return false
      }
  }
});

Template.noticias.events({ 
    'click #btMAs': function(event, template) { 
         console.log( "+ ",this._id, this.nombre );
         Meteor.call('aumentarVotos', this._id, function(error, success) { 
             if (error) { 
                 console.log('error', error); 
             } 
             if (success) { 
                  
             } 
         });
        
    },
     'click #btMenos': function(event, template) { 
         console.log( "- ",this._id, this.nombre );
          Meteor.call('disminuirVotos', this._id, function(error, success) { 
             if (error) { 
                 console.log('error', error); 
             } 
             if (success) { 
                  
             } 
         });
          
    }  
});