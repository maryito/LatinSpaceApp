import { Template } from 'meteor/templating';
import './api.html';


Template.api.helpers({
 data() {
   return Api.find();
 }
});