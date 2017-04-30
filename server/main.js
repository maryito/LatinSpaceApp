import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup

if (Api.find().count() === 0 ){
  const url = "https://data.nasa.gov/resource/tfkf-kniw.json"
  const data = HTTP.call("GET",url)

  _.each( data.data, ( obj ) => {

    if( obj.country){
      obj.countryname =  obj.country
    }
    Api.insert(obj)
})
} else{
  console.log( " listo ");
}


    // _.each( data, (x) => {
    //   if ( x.longitude){
    //      d = x
    //     console.log(" data ", d, " log ". x.latitude );

    //   }else {
    //     console.log( " logitud ")
    //   }
    // })

});
//Images = new FS.Collection("images",{
//  stores: [
//    stores: [
//        Stores.images,
//        Stores.thumbs
//    ]
//});
