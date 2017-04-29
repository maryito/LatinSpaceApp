import { Template } from 'meteor/templating';
import './mapas.html';

Template.mapas.onCreated(function () {
    Session.set('lat', 8.7867999999999995)
    Session.set('log', -82.866200000000006)
    GoogleMaps.load({
        key: "AIzaSyCTmQZ_IJoqteedF6XDFjdsaCgaSxDnhik",
        libraries: 'geometry, places'
    });
    GoogleMaps.ready('exampleMap', function (map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
        
    });
})
Template.mapas.helpers({
    exampleMapOptions: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options

            const lat = Session.get('lat');
            const log = Session.get('log');
 
            return {
                
                center: new google.maps.LatLng(lat, log),
                // center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 8
            };
        }
    }
});