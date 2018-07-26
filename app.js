let data;

fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=Q2XhzJodzEIn144Q5fAZ&app_code=ZO2Nr7ywg36TVPqrIUM5oA&at=-33.43727,-70.650556&pretty`)
.then(answer => answer.json())
.then(data => {
    console.log(data);
   //tipeOfFood(data)
});

let divMapa = document.getElementById("mapa");
navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
function fn_mal() {}
function fn_ok(rta){
    let lat = rta.coords.latitude;
    let lon = rta.coords.longitude;

    let gLatLon = new google.maps.LatLng(lat, lon);
    let objConfig = {
        zoom: 17,
        center: gLatLon,
    }
    let gMapa = new google.maps.Map(divMapa, objConfig);
    let gMarker = new google.maps.Marker(objConfigMarker)
}

var service = new google.maps.places.PlacesService(map);
service.getDetails({placeId: place.place_id}, 
    function (placeDetails, status) {
 if(status == google.maps.places.PlacesServiceStatus.OK) {
   alert('placeDetails.formatted_address');
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




