import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './utils/registerServiceWorker';
import './stylesheets/main.scss'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
