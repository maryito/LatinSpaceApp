

 Meteor.startup(function() {
  Template.registerHelper("Schemas", Schemas);

    TAPi18n.setLanguage('es')
      .done(function () {
        // console.log("Iniciando en esp");
      })
      .fail(function (error_message) {
        // Handle the situation
        // console.log(error_message);
      });

  });
