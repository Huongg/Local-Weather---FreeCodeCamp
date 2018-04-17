

$(document).ready(function(){
	
	// From C to F
	function cToF(celsius) {
	  return (celsius * 9 / 5 + 32).toFixed(2);
	}
	// From F to C
	function fToC(fahrenheit) {
	  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
	}



	$(".btn").click(function(){
		let tempInCelsius = $(".temp").text();
		let tempValInCelsius = tempInCelsius.substring(0, tempInCelsius.length -1);
		let lastWordOfCelsius = tempInCelsius.charAt(tempInCelsius.length-1);
		// let lastWordOfFah = 
		let convertedToF = cToF(tempValInCelsius);
		let convertedToC = fToC(tempValInCelsius);



		if (lastWordOfCelsius.charCodeAt(0) === 8451){
			$(".temp").html(`${convertedToF} &#8457`);
			$(".btn").text("In Degree");

		} else if(lastWordOfCelsius.charCodeAt(0) === 8457){
			$(".temp").html(`${convertedToC} &#8451`);
			$(".btn").text("In Dah");

		}
		
		

	})
	
	


});

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     getWeather(lat,long);
//     })
//   }  else {
//    loc.innerHTML = "Geolocation is not supported by this browser.";
//  }


//Test purposes
getWeather(35,139);
   

// 

function getWeather(lat, long) {
	const root = "https://fcc-weather-api.glitch.me/api/current?";
	var myReqDynamic = `${root}lat=${lat}&lon=${long}`;
	//var myReqStatic = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";


	var reqType = "get";
  	
  	fetch(myReqDynamic, { method: reqType})
    	.then(resp => resp.json())
    	.then(data => {
      		updateDataToUI(data.name, data.weather, data.main.temp, data.weather.icon);
    	})
    	.catch((err) => {
    		console.error(err);
  		});
}


function updateDataToUI(cityName, weather, temp, icon){

	//IMplement here
	$(".city").text(cityName);
	$(".temp").html(`${temp} &#8451`);
	$(".status").text(weather[0]["description"]);	
	$(".icon").html(`<img src="${weather[0].icon}" />`);
}



