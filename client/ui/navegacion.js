Template.registerHelper('currentRouteIs', function (route) {
  return Router.current().route.getName() === route;
});

Template.navegacion.rendered = function () {
  $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
      if($(window).width() < 768 )
          $('#navbar').collapse('hide');
  });
};
