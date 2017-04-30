import { SimpleSchem } from 'meteor/aldeed:simple-schema';

Schemas = {};

Schemas.deslizamineto = new SimpleSchema({
    usuario:{
        label: "Nombre o alias",
        type: String,
         defaultValue: function(){
            const p = Meteor.user();
            if (p) return p.username;
            else  return  "anonimo";
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
        allowedValues: ["Ciclón tropical","Aguacero","Lluvia","Lluvia continua","Terremoto","Construcción","Desconocido","Excavación minera","Inundación","Congelar el deshielo","Nevadas"]
    },
    tipo:{
        label: "Tipo de deslizamiento",
        type: String,
        allowedValues: ['Lodo', 'Tierra','Rocas', 'Montaña']
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
    // location: {
    //     label: "Indique la ubicación",
    //     type: String,
    //       optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: 'map',
    //             geolocation: true,
    //             searchBox: true,
    //             autolocate: true,
    //         },
    //     },
    // }
});