let map;
let infowindow;

 function initMap() {
 // Creamos un mapa con las coordenadas actuales
   navigator.geolocation.getCurrentPosition(function(pos) {

   lat = pos.coords.latitude;
   lon = pos.coords.longitude;

   const myLatlng = new google.maps.LatLng(lat, lon);

   const mapOptions = {
     center: myLatlng,
     zoom: 14,
     mapTypeId: google.maps.MapTypeId.SATELLITE
   };

   map = new google.maps.Map(document.getElementById("mapa"),  mapOptions);

   // Creamos el infowindow
   infowindow = new google.maps.InfoWindow();

   // Especificamos la localización, el radio y el tipo de lugares que queremos obtener
   const request = {
     location: myLatlng,
     radius: 5000,
     types: ["commerceType"],
     key: "AIzaSyCwuJFWpike7UG7LNrFMSuFZpKr6w3KQ5s"
   };

   // Creamos el servicio PlaceService y enviamos la petición.
   const service = new google.maps.places.PlacesService(map);

   service.nearbySearch(request, function(results, status) {
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
         crearMarcador(results[i]);
       }
     }
   });
 });
}

 function crearMarcador(place)
 {
   // Creamos un marcador
   const marker = new google.maps.Marker({
     map: map,
     position: place.geometry.location
   });

 // Asignamos el evento click del marcador
   google.maps.event.addListener(marker, 'click', function() {
     infowindow.setContent(place.name);
     infowindow.open(map, this);
     console.log(marker);
   });
   }

/*const service = new google.maps.places.PlacesService(map);
service.getDetails({
   placeId: place.place_id,
 }, function (placeDetails, status) {
 if (status == google.maps.places.PlacesServiceStatus.OK) {
   alert(placeDetails.formatted_address);
 }});

 function addStopOverMarker(map) {
  const stopOver = new google.maps.places.Autocomplete(document.getElementById('stopOver'));
  google.maps.event.addListener(stopOver, 'place_changed', function() {
    const coord = stopOver.getPlace().geometry.location;
    console.log(coord);
    var marker = new google.maps.Marker({
      position: coord,
      map: map,
      draggable: true,
      visible: true,
      placeId: place.place_id
    });
  });
}*/





//Funcion para busqueda
/*function tipeOfFood(data){

    const searchInfo = document.getElementById("tipeOfFood");
    const containerName = document.getElementById("restaurantName");
    const containerFood = document.getElementById("comidas");
    const containerAttention = document.getElementById("horario");
    const containerLocation = document.getElementById("ubicacion");
    
    let info = data["results"].items;
   // let items = info["tags"].title;
    console.log(info);

    const filtrar = info.filter(element => {
        return element.id;
        console.log(filtrar); 
    })

    searchInfo.innerHTML = data.results.items[0].tags[1].id;
    containerName.innerHTML = data.results.items[0].title;
    containerFood.innerHTML = data.results.items[0].tags[0].title;
    containerAttention.innerHTML = data.results.items[0].vicinity;
}*/




