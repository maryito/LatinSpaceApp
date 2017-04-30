
Template.formularios.onCreated( function(){
    Session.set('FormularioListo', false);
    /*  GoogleMaps.load({
        key: "AIzaSyCTmQZ_IJoqteedF6XDFjdsaCgaSxDnhik",
        template: "places"
     }); */
})

Template.formularios.onRendered( function(){
  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';
  var mapUrl = 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
  var mapTiles = L.tileLayer(mapUrl);
  var map = L.map('formmap', {
    zoom: 5,
    center: [0,0],
    scrollWheelZoom: true,
    layers: [mapTiles]
  });
  map.spin(true);
  map._layersMinZoom=3;
  map.setMaxBounds([[84.67351256610522, -174.0234375], [-64.77413, 15.82031]]);
  map.spin(false);
})

Template.formularios.helpers({
  ReadyForm() {
    return Session.get('FormularioListo');
  }
})

let contadorFoto = 0;

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  },

});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (contadorFoto < 5) {

      if (e.currentTarget.files && e.currentTarget.files[0]) {
        // We upload only one file, in case
        // multiple files were selected
        var upload = Images.insert({
          file: e.currentTarget.files[0],
          streams: 'dynamic',
          chunkSize: 'dynamic',
          reporteId: Session.get('imagenForm') 
        }, false);

        upload.on('start', function () {
          template.currentUpload.set(this);
        });

        upload.on('end', function (error, fileObj) {
          if (error) {
            alert('Error al Cargar la Imagen: ' + error);
          } else {
            contadorFoto += 1;
            alert('Foto #'+ contadorFoto +" nombre "+ fileObj.name +" Subida con Éxito");
            
          }
          template.currentUpload.set(false);
        });

        upload.start();
      }
    } else{
      alert("Alcanzo el maximo de fotos permitidas.")
    
      Meteor.setInterval( () => {
        console.log("reenviando...")
        contadorFoto = 0;
         Router.go('loading')
      }, 2000)
        Router.go('home')
    }

  }
});

AutoForm.hooks({
  reporteFormDelizamiento: {
    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
      if (result) {
        alert(" Paso 1/2 Completado!")
        Session.set('FormularioListo', true);
         Session.set('imagenForm', result);

        console.log("Agregando reporte ", result)

      }


    },
    // Called when any submit operation fails
    onError: function (formType, error) {
      console.log("Error reporte ", error)
    },
  }
});
