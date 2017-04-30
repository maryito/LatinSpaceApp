// Using a template's rendered callback
Meteor.startup(function(){
  /* Mapbox.load({
      gl: true
    }

  ); */
});


Template.mapa.onRendered(function () {
    this.autorun(function () {
      /*if (Mapbox.loaded()) {
        const lat2 = "9.3247999999999998";
        const log2 = "-79.886700000000005";
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF0aW5zcGFjZWFwcCIsImEiOiJjajIzY2UwbXAwMDBuMnFtNXgzYnRzcXQ3In0.3Q0ltAnvbNRqUAkX70OCVA';
      } */
      function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++ ) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }

      L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';
      var mapUrl = 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
      var mapTiles = L.tileLayer(mapUrl);
      var map = L.map('map', {
        zoom: 5,
        center: [8.997669, -79.526854],
        scrollWheelZoom: true,
        layers: [mapTiles]
      });
      map.spin(true);

      Api.find({}).forEach(function(element) {
       //element.latitude , element.longitude, element.trigger, element.near, element.landslide_type
      // console.log( element.latitude , element.longitude, element.trigger, element.near, element.landslide_type);
      //console.log( collection);

        //mapa
        /* let  map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
            center: [log2, lat2], // starting position
            zoom: 8 // starting zoom
        }); */
        //graficar puntos en el mapa
        // add circle marker to map
        var circle = L.circle([element.latitude, element.longitude], {
            color: getRandomColor(),
            fillOpacity: 0.85,
            radius: 25000
        }).addTo(map);
        // Finally bind the containerNode to the popup
        circle.bindPopup("<b>"+ element.near +"</b><br>"+ element.trigger +"<br>"+ element.landslide_type +".").openPopup();

        }, this);
        //fitWorld( <fitBounds options>)
        map._layersMinZoom=3;
        map.spin(false);

      });
  });


// Template.mapa.onCreated( function() {
//   Mapbox.debug = true;
//   Mapbox.load({
//       gl: true
//     });
// })
