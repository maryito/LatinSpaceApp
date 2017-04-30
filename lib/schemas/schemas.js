import { SimpleSchem } from 'meteor/aldeed:simple-schema';

Schemas = {};

Schemas.deslizamineto = new SimpleSchema({
    nombre: {
        type: String,
        max: 50,
    },
    fecha: {
        type: Date,
        defaultValue: new Date()
    },
    estado: {
        label: "Estado",
        type: String,
        allowedValues: ['Bajo Riesgo', 'Alto Riesgo'],
        optional: true,
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
    },
});