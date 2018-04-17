

$(document).ready(function(){

	// Get user current location
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			getWeather(lat,long);
		})
	}  else {
		loc.innerHTML = "Geolocation is not supported by this browser.";
	}



	// From C to F
	function cToF(celsius) {
	  return (celsius * 9 / 5 + 32).toFixed(2);
	}
	// From F to C
	function fToC(fahrenheit) {
	  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
	}




	// Toogle function for btn
	$(".btn").click(function(){

		// Get value from .temp in HTML
		let tempHTML = $(".temp").text();

		// Get the scale of temperature. It's either *C or *F
		let tempScale = tempHTML.charAt(tempHTML.length-1);

		// Get the temperature number only by manipulating the *C or *F at the end of tempHTML
		let tempNum = tempHTML.substring(0, tempHTML.length -1);
		
		// Call the converted functions above to do the Math
		let convertedToF = cToF(tempNum);
		let convertedToC = fToC(tempNum);


		// Where toggle works, if the temperature scale is equal *C, run convertedToF function; and vice versa. It will change the button too
		if (tempScale.charCodeAt(0) === 8451){
			$(".temp").html(`${convertedToF} &#8457`);
			$(".btn").text("In Celsius");

		} else if(tempScale.charCodeAt(0) === 8457){
			$(".temp").html(`${convertedToC} &#8451`);
			$(".btn").text("In Fahrenheit");
		}
	})

});




   

// This function will get the value lat and long that we have from the get user current code above,
// and applied them into provide API, using FETCH

function getWeather(lat, long) {

	// Assign the API link to the variable name called root
	const root = "https://fcc-weather-api.glitch.me/api/current?";

	// Create a dynamic function to apply the lat and long that we have from above
	let myReqDynamic = `${root}lat=${lat}&lon=${long}`;



	// Static function where you can give the specific numbers in the API link
	//var myReqStatic = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";




	// using GET HTTP request to get to the API
	var reqType = "get";
  	

  	fetch(myReqDynamic, { method: reqType}) //fetch takes the URL parameter that we created from above to the request
    	.then(resp => resp.json()) //.then(resp) then will have a promise response of json()
    	.then(data => { // after that another .then() to get the data from json()
      		updateDataToUI(data.name, data.weather, data.main.temp, data.weather.icon); //get specific properties from json()
		// by using data.propertyname
    	})
    	.catch((err) => { //handle event for error so it wont crash the whole programe
    		console.error(err);
  		});
}


function updateDataToUI(cityName, weather, temp, icon){ //create a function called updateDataToUi
														// it will pass the arguments from updateDataToUi on line 91 to this


	//now we have the data value from json()
	$(".city").text(cityName); //pass it into the HTML file
	$(".temp").html(`${temp} &#8451`);
	$(".status").text(weather[0]["description"]);	
	$(".icon").html(`<img src="${weather[0].icon}" />`);
}



