import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStore from '../store/AppStore';
import API_weather_helpers from '../utils/API_weather_helpers';


class AppActions {

    chooseTempUnit(data) {
        AppDispatcher.dispatch({
            actionType: 'CHOOSE_TEMP_UNIT',
            value: data
        });
    }

    clickOk(data) {
         AppDispatcher.dispatch({
            actionType: 'CLICK_OK',
            value: data
        });
    }

    chosenCity(data) {
         AppDispatcher.dispatch({
            actionType: 'CHOSEN_CITY',
            value: data
        });
    }


    generateURL(URLPrefix, countryName, chosenUnit, APIKey, coordinats){
        if (countryName) {
            return `${URLPrefix}q=${countryName}&units=${chosenUnit}&APPID=${APIKey}`;
        } else {
            return `${URLPrefix}lat=${coordinats.latitude}&lon=${coordinats.longitude}&units=${chosenUnit}&APPID=${APIKey}`;
        }
        
    }

    fetchAPI() {
        const URLPrefix = "http://api.openweathermap.org/data/2.5/forecast?";
        const APIKey = "26b3fd73e61dc700f749547b3833c188";
        let coordinats = AppStore.getCurrentLocationCoords();
        let countryName = AppStore.getChosenCity();
        let chosenUnit = AppStore.getChosenUnit();
        let res;

        let url = this.generateURL(URLPrefix, countryName, chosenUnit, APIKey, coordinats)
        fetch (url)
            .then(results => {
                return results.json();
            }).then(data => {
                // res = data;
                res = API_weather_helpers.parseWeatherData(data);
                
                AppDispatcher.dispatch({
                    actionType: 'WEATHER_LOADED', 
                    value: res
                })
            });

    }

    getCurrentLocation() {
        let geolocation = navigator.geolocation;

        if (geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let coords = position.coords;

                AppDispatcher.dispatch({
                    actionType: 'CURRENT_LOCATION_LOADED',
                    value: coords
                })
            })
        } else {
            console.log("Not supported");
        }
        
           
        
    };

}

export default new AppActions();