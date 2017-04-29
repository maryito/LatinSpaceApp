import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Schema={};

Schemas.deslizamineto = new SimpleSchema({
    nombre:{
        type: String,
        max:50,
    },
    fecha:{
        type: Date,
        defaultValue: new Date(),
    },
    estado:{
        type:[String],
        optional:true,
        allowedValues:['Bajo Riesgo','Alto Riesgo']
    },
});