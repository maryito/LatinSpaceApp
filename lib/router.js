
Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
});

Router.map(function () {
  this.route('home', {
    path: '/',
    subscriptions: function () {
      // returning a subscription handle or an array of subscription handles
      // adds them to the wait list.
      return Meteor.subscribe('Api.inicial', 250);
    },
    action: function () {
      if (this.ready()) {
        this.render();
      } else {
        this.render('loading');
      }
    }
  });
  this.route('api', {
    path: '/api',
    subscriptions: function () {
      // returning a subscription handle or an array of subscription handles
      // adds them to the wait list.
      return Meteor.subscribe('Api.todo');
    },
    action: function () {
      if (this.ready()) {
        this.render();
      } else {
        this.render('loading');
      }
    }
  });
  this.route('mapa', { path: '/maps' });
  this.route('formularios', {
    path: '/formularios'
  });
  this.route('sabiasque', { path: '/sabiasque' });
  this.route('noticias', {
    path: '/noticias',
    waitOn: function () {
      return this.subscribe("Deslizamiento.nuevo");
    }
  });
});