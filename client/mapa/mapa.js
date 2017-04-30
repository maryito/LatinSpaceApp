// Using a template's rendered callback
Meteor.startup(function(){
  Mapbox.load({
      gl: true
    }

    );
});


Template.mapa.onRendered(function () {
    this.autorun(function () {
      /*if (Mapbox.loaded()) {
        const lat2 = "9.3247999999999998";
        const log2 = "-79.886700000000005";
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF0aW5zcGFjZWFwcCIsImEiOiJjajIzY2UwbXAwMDBuMnFtNXgzYnRzcXQ3In0.3Q0ltAnvbNRqUAkX70OCVA';
      } */
      const collection = [];
      Api.find({}).forEach(function(element) {
      collection.push( element.latitude , element.longitude, element.trigger, element.near, element.landslide_type);
      // console.log( element.latitude , element.longitude, element.trigger, element.near, element.landslide_type);
      }, this);
      console.log( collection);

        //mapa
        /* let  map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
            center: [log2, lat2], // starting position
            zoom: 8 // starting zoom
        }); */
        L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';
        var mapUrl = 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
  			var mapTiles = L.tileLayer(mapUrl);
  			var map = L.map('map', {
  				zoom: 5,
  				center: [0,0],
  				scrollWheelZoom: true,
  				layers: [mapTiles]
  			});
        map.spin(true);
  			map._layersMinZoom=3;
  			map.setMaxBounds([[84.67351256610522, -174.0234375], [-64.77413, 15.82031]]);
        map.spin(false);
        //graficar puntos en el mapa

        /*
        // We pick up the SVG from the map object
					var svg = d3.select("#map").select("svg").data(collection);
					var markersColor = svg.append('g').attr("id", "markersColor");
					var markersEmpty = svg.append('g').attr("id", "markersEmpty");

					var tip = d3.tip()
					 .attr('class', 'd3-tip')
					 .offset([-10, 0])
					 .html(function(d) {
					   return "<strong>:</strong> <span style='color:#FF0000'>" + d.answer + "</span>";
					 })
					svg.call(tip);
					svg.selectAll("circle").remove();

					// Add a LatLng object to each item in the dataset
					collection.forEach(function(d) {
						d.LatLng = new L.LatLng(d.latitude, d.longitude)
					})

					var colors = d3.scale.ordinal()
								 .domain(d3.range(0, 30))
							     .range(["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"]);

					var c10 = d3.scale.category20();
					c10.domain(d3.range(0, 20));

					var feature = markersColor.selectAll("circle")
						.data(collection)
						.enter().append("circle")
						.style("stroke", "black")
						.style("opacity", .8)
						.style("fill", function (d) { return colors(d.answer);})
						.on('mouseover', tip.show)
						.on('mouseout', tip.hide)
						.attr("r", 7);

					function update() {
						feature.attr("cx",function(d) { return map.latLngToLayerPoint(d.LatLng).x})
						feature.attr("cy",function(d) { return map.latLngToLayerPoint(d.LatLng).y})
					}

					map.on("viewreset", update);
					update();
					map.fitBounds(extentGroup.getBounds());
          */
    });
  });


// Template.mapa.onCreated( function() {
//   Mapbox.debug = true;
//   Mapbox.load({
//       gl: true
//     });
// })
