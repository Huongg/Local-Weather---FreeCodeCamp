import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';

let _chosenUnit = undefined;
let _finishedSetUp = undefined;
let _data = undefined;

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this));
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    /*
        GET AND SET FOR TEMP UNIT
    */
    getChosenUnit() {
         return _chosenUnit;
    }

    chooseTempUnit(input) {
        _chosenUnit = input;
    }

    /*
        GET AND SET FOR WHEN USER CLICKED OK
    */
    getFinishedSetUp() {
        return _finishedSetUp;
    }

    clickOk(input) {
        _finishedSetUp = input;
    }

    /*
        API call
    */
    getData() {
       return _data;
    }

    fetchAPI(data) {
      _data = data;
      this.emitChange(); 
    }

    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'CHOOSE_TEMP_UNIT':
                this.chooseTempUnit(action.value);
                break;
            case 'CLICK_OK':
                this.clickOk(action.value);
                break;
            case 'WEATHER_LOADED':
                this.fetchAPI(action.value);
                break;
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();