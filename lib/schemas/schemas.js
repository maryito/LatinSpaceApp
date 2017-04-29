import { SimpleSchem } from 'meteor/aldeed:simple-schema';

Schemas={};

Schemas.deslizamineto = new SimpleSchema({
    nombre:{
        type: String,
        max: 50,
    },
    fecha:{
        type: Date,
        defaultValue: new Date()
    },
    estado:{
        type: [String],
        optional: true,
        allowedValues: ['Bajo Riesgo','Alto Riesgo']
    },
});