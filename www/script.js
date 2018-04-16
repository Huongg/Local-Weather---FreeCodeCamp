

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    })
  };


// 

function getWeather(lat, long) {
	const root = "https://fcc-weather-api.glitch.me/api/current?";
	var myReqDynamic = `${root}lat=${lat}&lon=${long}`;
	var myReqStatic = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";


	var reqType = "get";
  	
  	fetch(myReqStatic, { method: reqType})
    	.then(resp => resp.json())
    	.then(data => {
      		updateDataToUI(data.name, data.weather, data.main.temp);
    	})
    	.catch((err) => {
    		console.error(err);
  		});
}


function updateDataToUI(cityName, weather, temp){

	//IMplement here
	$(".city").text(cityName);
	$(".temp").text(temp);
	$(".status").text(weather[0]["description"]);	
}

getWeather(4., 3.);