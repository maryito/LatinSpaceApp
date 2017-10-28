import { SimpleSchem } from 'meteor/aldeed:simple-schema';

Schemas = {};

Schemas.prueba = new SimpleSchema({
estado: {
        label: "Acontecimiento",
        type: String,
        allowedValues: ['Si', 'No'],
        optional: true,
    },
});
Schemas.deslizamineto = new SimpleSchema({
    usuario:{
        label: "Nombre o alias",
        type: String,
         defaultValue: function(){
            const p = Meteor.user();
            if (p) return p.username;
            
        },
    },
    usuarioId:{
        label: "Nombre o alias",
        type: String,
        defaultValue: function(){
            const p = Meteor.userId();
            if (p) return p;
            else  return  "anonimo";
        },
        optional: true,
         autoform: {
          type: 'hidden'
        }
    },
    bajas:{
        label: "Numero de muertos o heridos",
        type: Number,
        min: 0,
        optional: true
    },
    duracion:{
        label: "Hace cuanto ocurrio el evento",
        type: String,
        optional: true
    },
    nombre: {
        label: "Descripción del evento ocurrido.",
        type: String,
        max: 50,
    },
    fecha: {
        type: Date,
        defaultValue: new Date()
    },
    fechaReporte: {
        type: Date,
        defaultValue: new Date(),
         autoform: {
          type: 'hidden'
        }
    },
    causa:{
        label: "Causa de deslizamiento",
        type: String,
        allowedValues: ["Aguacero","Lluvia continua","Inundación","Deshielo","Nevadas","Ciclón tropical","Terremoto","Construcción","Excavación minera","Desconocido"]
    },
    tipo:{
        label: "Tipo de deslizamiento",
        type: String,
        allowedValues: ['Lodo', 'Tierra','Rocas']
    },
    estado: {
        label: "Condición del terreno",
        type: String,
        allowedValues: ['Crítico','Emergencia','Urgencia'],
    },
    duracion:{
        label: "Hace cuanto ocurrio el evento",
        type: String,
        optional: true
    },
     reportes: {
        type: Number,
        defaultValue: 0,
         autoform: {
          type: 'hidden'
        }
    },
    contribuidores: {
        type: [String],
        defaultValue: 0,
         autoform: {
          type: 'hidden'
        }
    },
    location: {
        label: "Indique la ubicación",
        type: String,
          optional: true,
        autoform: {
            afFieldInput: {
                type: 'map',
                geolocation: true,
                searchBox: true,
                autolocate: true,
            },
        },
    }
});