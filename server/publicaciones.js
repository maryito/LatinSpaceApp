Meteor.publish('Api.todo', function () {
    return Api.find({}, {
        fields: {
            countryname: 1,
            nearest_places: 1,
            latitude: 1,
            longitude: 1,
            landslide_type: 1,
            landslide_size: 1,
            tstamp: 1,
            trigger: 1,
            near: 1
        },
        sort: { tstamp: -1 }
    })
});

Meteor.publish('Api.inicial', function (max) {
    return Api.find({}, {
        fields: {
            countryname: 1,
            nearest_places: 1,
            latitude: 1,
            longitude: 1,
            landslide_type: 1,
            landslide_size: 1,
            tstamp: 1,
            trigger: 1,
            near: 1
        },
        limit: max,
        sort: { tstamp: -1 }
    })
});


Meteor.publish('Deslizamiento.nuevo', function () {
    return Deslizamientos.find({}, { sort: { fechaReporte: -1 } })
});



