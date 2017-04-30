Template.noticias.onCreated( function() {
    Session.set('+Noticias', 15)
    this.subscribe('Deslizamiento.nuevo')
    // Meteor.subscribe('name', argument);
})

Template.noticias.helpers({
  Datos() {
    const aum = Session.get('+Noticias')
    return Api.find({}, { limit: aum });
  },
  ListaNoticias() {
      return Deslizamientos.find();
  }
});