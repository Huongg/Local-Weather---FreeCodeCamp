import AppDispatcher from '../dispatcher/AppDispatcher';
import AppStore from '../store/AppStore';


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

    fetchAPI() {
        const URLPrefix = "http://api.openweathermap.org/data/2.5/forecast?";
        const APIKey = "26b3fd73e61dc700f749547b3833c188";
        let coordinats = "lat=35&lon=139";
        let chosenUnit = AppStore.getChosenUnit();
        let res;

        let url = `${URLPrefix}${coordinats}&units=${chosenUnit}&APPID=${APIKey}`;
        fetch (url)
            .then(results => {
                return results.json();
            }).then(data => {
                res = data;
                
                AppDispatcher.dispatch({
                    actionType: 'WEATHER_LOADED', 
                    value: res
                })
                 // let name = data.city.name;
                // let dt_txt = data.list[0].dt_txt;
                // let currentDate = new Date(dt_txt).getDate();
    
            });

    }


}

export default new AppActions();