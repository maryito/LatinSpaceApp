
// Using a template's rendered callback
Meteor.startup(function(){
  Mapbox.load({
      gl: true
    }
    
    );
});


Template.mapa.onRendered(function () {
   
    this.autorun(function () {
      if (Mapbox.loaded()) {
        const lat2 = "9.3247999999999998";
        const log2 = "-79.886700000000005"
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF0aW5zcGFjZWFwcCIsImEiOiJjajIzY2UwbXAwMDBuMnFtNXgzYnRzcXQ3In0.3Q0ltAnvbNRqUAkX70OCVA';
        let  map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
            center: [log2, lat2], // starting position
            zoom: 8 // starting zoom
        });
      }
    });
  });


// Template.mapa.onCreated( function() {
//   Mapbox.debug = true;
//   Mapbox.load({
//       gl: true
//     });
// })