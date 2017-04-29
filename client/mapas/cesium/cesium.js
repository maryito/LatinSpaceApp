Template.cesium.onCreated( function () {
  $.getScript('http://cesiumjs.org/releases/1.11/Build/Cesium/Cesium.js', function() {
      Session.set('cesiumReady', true);
      testViewer = Meteor.call('initializeCesium');
      Meteor.call("initialize");
    }); 
 Session.set('cesiumReady', false);
})
CESIUM_BASE_URL = 'http://cesiumjs.org/releases/1.11/Build/Cesium/';

var testViewer, testCommon;
Meteor.methods({
    initializeCesium() {
        /*console.log("Starting initializeCesium with global var CESIUM_BASE_URL: "
          +CESIUM_BASE_URL);*/
        // console.log(Session.get('cesiumReady'));
        // console.log(Cesium);
        Cesium.BingMapsApi.defaultKey = 'NA';

        var osmProv = new Cesium.OpenStreetMapImageryProvider({
            url: '//a.tile.openstreetmap.org/',
        });

        var terrainProvider = new Cesium.CesiumTerrainProvider({
            //url : '//cesiumjs.org/stk-terrain/tilesets/world/tiles',
            url: '//assets.agi.com/stk-terrain/tilesets/world/tiles',
            requestVertexNormals: true
        });
        // console.log("Set variables. Building viewer.");
        // console.log(Cesium.Viewer);
        // console.log(document.getElementById("cesiumContainer"));
        // console.log(document.getElementById("creditContainer"));

        var viewer = new Cesium.Viewer(document.getElementById("cesiumContainer"), {
            timeline: false,
            animation: false,
            infoBox: false,
            navigationInstructionsInitiallyVisible: false,
            creditContainer: document.getElementById("creditContainer"),
            imageryProvider: osmProv,
            baseLayerPicker: false,
            terrainProvider: terrainProvider,
            sceneMode: Cesium.SceneMode.COLUMBUS_VIEW
        });
        var wyoming = viewer.entities.add({
            name: 'Wyoming',
            polygon: {
                hierarchy: Cesium.Cartesian3.fromDegreesArray([
                    -109.080842, 45.002073,
                    -105.91517, 45.002073,
                    -104.058488, 44.996596,
                    -104.053011, 43.002989,
                    -104.053011, 41.003906,
                    -105.728954, 40.998429,
                    -107.919731, 41.003906,
                    -109.04798, 40.998429,
                    -111.047063, 40.998429,
                    -111.047063, 42.000709,
                    -111.047063, 44.476286,
                    -111.05254, 45.002073]),
                height: 0,
                material: Cesium.Color.RED.withAlpha(0.5),
                outline: true,
                outlineColor: Cesium.Color.BLACK,

            }
        });

        // console.log("Viewer built.");
        // console.log(this._viewer);
        return viewer.zoomTo(wyoming);
    },

    initialize() {
        // Editing cesium toolbar
        // console.log(document.getElementById("cesiumContainer"));
        var toolbars = document.getElementsByClassName("cesium-viewer-toolbar");
        // console.log(toolbars);
        var toolbar = toolbars[0];
        // console.log(toolbar);
        var togglerBtn = document.createElement("BUTTON");
        togglerBtn.className = "cesium-button cesium-toolbar-button togglerBtn";
        togglerBtn.onclick = function () { Meteor.call('showHideElement', 'toggle-List'); }
        togglerBtn.style.backgroundImage = "url(/client/img/app-feature-icon-map.png)";
        togglerBtn.style.backgroundSize = "100%";
        toolbar.appendChild(togglerBtn);
    },

    showHideElement(elementID) {
        var element = document.getElementById(elementID);
        var display = element.style.display;
        if (display == 'none') {
            element.style.display = 'inherit';
        }
        else {
            element.style.display = 'none';
        }
    }
});


 

