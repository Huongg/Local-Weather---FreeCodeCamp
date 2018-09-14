import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let _chosenUnit = undefined
let _finishedSetUp = undefined

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }


    getChosenUnit() {
         return _chosenUnit;
    }

    chooseTempUnit(input) {
        _chosenUnit = input;
    }

    getFinishedSetUp() {
        return _finishedSetUp;
    }

    clickOk(input) {
        _finishedSetUp = input;
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
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();