import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import accounts from './reducers/index';

const store = createStore(accounts);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
