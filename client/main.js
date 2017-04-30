
 Meteor.startup(function() {
  Template.registerHelper("Schemas", Schemas);

console.log(
    Geolocation.currentLocation(), " geo ",
  Geolocation.latLng()
)

  });