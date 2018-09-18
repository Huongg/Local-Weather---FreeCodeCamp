function getCurrentLocation() {
	if (!navigator.geolocation){
		alert("Geolocation is not supported by this browser.");
  	}

  	function success(position) {
	    let lat = position.coords.latitude;
	    let long = position.coords.longitude;
	    alert("lat:" + lat + " lng:" + lng);	
	}

	function error() {
	    alert("Unable to retrieve your location");
	}

}

module.exports = { 
	getCurrentLocation: getCurrentLocation
};