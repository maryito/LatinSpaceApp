import { Template } from 'meteor/templating';
import './api.html';


Template.api.helpers({
  data() {
    return Api.find({});
  }
});


Template.api.rendered = function () {
    $('.lsa-table').dataTable(
      {
        responsive: true,
        lengthMenu:	[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]]
      }
    );
};
