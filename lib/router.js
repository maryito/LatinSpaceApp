Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  waitOn: function () {
    this.subscribe('Api.todo').wait();
      if (this.ready()) {
        this.render();
      } else {
        this.render('loading');
      }
  },
});

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('api', { path: '/api' });
  this.route('mapa', { path: '/maps' });
  this.route('formularios', {
    path: '/formularios',
    waitOn: function () {
      this.subscribe("Deslizamiento.nuevo");
    }
  });
  this.route('sabiasque', { path: '/sabiasque' });
  this.route('pruebas', { path: '/pruebas' });
});

const requireLogin = function () {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    permt = Roles.userIsInRole(Meteor.userId(), ['usuario', 'admin']);
    if (permt) {
      this.next();
    } else {
      this.render('accessDenied');
    }
  }
};

const requireAdmin = function () {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    permt = Roles.userIsInRole(Meteor.userId(), 'admin');
    if (permt) {
      this.next();
    } else {
      this.render('accessDenied');
    }
  }
};

// verificaciones antes de ir al apartado
Router.onBeforeAction(requireAdmin, { only: ['admin'] });
// validamos que para estos modulos el usuario este logeado
// Router.onBeforeAction(requireLogin, { only: ['usuario'] });
