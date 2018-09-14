import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App.js';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
