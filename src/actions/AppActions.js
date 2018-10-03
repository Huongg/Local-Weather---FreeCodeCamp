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

    generateURL(URLPrefix, countryName, chosenUnit, APIKey){
        return `${URLPrefix}&q=${countryName}&units=${chosenUnit}&APPID=${APIKey}`;
    }

    fetchAPI() {
        const URLPrefix = "http://api.openweathermap.org/data/2.5/forecast?";
        const APIKey = "26b3fd73e61dc700f749547b3833c188";
        let coordinats = "lat=35&lon=139";
        let countryName = AppStore.getChosenCity();
        let chosenUnit = AppStore.getChosenUnit();
        let res;

        let url = this.generateURL(URLPrefix, countryName, chosenUnit, APIKey)
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
        const geolocation = navigator.geolocation;
          
        const location = new Promise((resolve, reject) => {
            if (!geolocation) {
              reject(new Error('Not Supported'));
            }
            
            geolocation.getCurrentPosition((position) => {
              resolve(position);
            }, () => {
              reject (new Error('Permission denied'));
            });
        });
          
        AppDispatcher.dispatch({
            actionType: 'CURRENT_LOCATION_LOADED',
            payload: location
        })
           
        
    };

}

export default new AppActions();