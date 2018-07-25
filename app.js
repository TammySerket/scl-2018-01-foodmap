let data;

fetch("https://places.demo.api.here.com/places/v1/discover/search?at=37.7942%2C-122.4070&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg")
.then(answer => answer.json())
.then(data => {
    console.log(data)
    tipeOfFood(data)
});

//Funcion para busqueda
function tipeOfFood(data){
    let searchInfo = document.getElementById("tipeOfFood");
    const containerName = document.getElementById("restaurantName");
    const containerFood = document.getElementById("comidas");
    const containerAttention = document.getElementById("horario");
    const containerLocation = document.getElementById("ubicacion");
    

    searchInfo.innerHTML = data.results.items[0].tags[1].id;
    containerName.innerHTML = data.results.items[0].title;
    containerFood.innerHTML = data.results.items[0].tags[0].title;
    containerAttention.innerHTML = data.results.items[0].vicinity;
}




