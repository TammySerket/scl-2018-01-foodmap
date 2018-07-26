let data;

fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=Q2XhzJodzEIn144Q5fAZ&app_code=ZO2Nr7ywg36TVPqrIUM5oA&at=-33.43727,-70.650556&pretty`)
.then(answer => answer.json())
.then(data => {
    console.log(data);
   //tipeOfFood(data)
});

let map;
let infowindow;

 function initMap()
 {
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
     types: ['restaurante']
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
   });
   }

const service = new google.maps.places.PlacesService(map);
service.getDetails({
   placeId: place.place_id,
 }, function (placeDetails, status) {
 if (status == google.maps.places.PlacesServiceStatus.OK) {
   alert(placeDetails.formatted_address);
 }});


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




