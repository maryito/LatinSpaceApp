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
        type: String
    },
    direccion:{
        label: "Breve dirección del lugar",
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
    location: {
        type: String,
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