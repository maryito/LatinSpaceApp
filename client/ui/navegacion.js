Template.registerHelper('currentRouteIs', function (route) {
  return Router.current().route.getName() === route;
});

Template.navegacion.rendered = function () {
  $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
      if($(window).width() < 768 )
          $('#navbar').collapse('hide');
  });
};

Template.navegacion.events({ 
     'click #idiomaEs': function(event, template) {
       event.preventDefault();
        // tendria que obtener el idioma que seleciono
        TAPi18n.setLanguage('es')
        accountsUIBootstrap3.setLanguage('es');        
    },
     'click #idiomaEn': function(event, template) {
       event.preventDefault();
        // tendria que obtener el idioma que seleciono
        TAPi18n.setLanguage('en')
        accountsUIBootstrap3.setLanguage('en');        
    }
});