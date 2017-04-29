// Basic
//Meteor.startup(function(){
//    Mapbox.load({
//        plugins: ['minimap', 'markercluster']
//    });
//});

//Deps.autorun(function () {
//  if (Mapbox.loaded()) {
//    L.mapbox.accessToken = MY_ACCESS_TOKEN;
//    var map = L.mapbox.map('map', MY_MAP_ID);
//  }
//});


// Using a template's rendered callback
Meteor.startu~~p(function(){
  Mapbox.load();
});

//Template.streetmap.rendered = function () {
//    this.autorun(function () {
//        if (Mapbox.loaded()) {
//            L.mapbox.accessToken = 'pk.eyJ1IjoibGF0aW5zcGFjZWFwcCIsImEiOiJjajIzY2UwbXAwMDBuMnFtNXgzYnRzcXQ3In0.3Q0ltAnvbNRqUAkX70OCVA';
//            //MAP_ID={style: 'mapbox://styles/mapbox/streets-v9'}
//            var map = L.mapbox.map(container:'map');
//        }
//    });
//};

Template.streetmap.onRendered(function () {
    Mapbox.debug = true;
    Mapbox.load({
      gl: true
    });

    this.autorun(function () {
      if (Mapbox.loaded()) {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF0aW5zcGFjZWFwcCIsImEiOiJjajIzY2UwbXAwMDBuMnFtNXgzYnRzcXQ3In0.3Q0ltAnvbNRqUAkX70OCVA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});
      }
    });
  });