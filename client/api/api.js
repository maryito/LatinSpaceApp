import { Template } from 'meteor/templating';
import './api.html';

Template.api.onCreated(function () {
  Session.set('+Api', 30)
})

Template.api.helpers({
  data() {
    const aum = Session.get('+Api')
    return Api.find({}, { limit: aum });
  }
});

Template.api.events({ 
  'click #apiMas': function(event, template) { 
     event.preventDefault();
     const x = Session.get('+Api') + 10;
     Session.set('+Api', x)
  },
  'click .mapaIdBt': function( event, template) {
    event.preventDefault();
    let data = $('#'+this._id).data('id')
    console.log(  " id  mapa ", data);
  } 
});