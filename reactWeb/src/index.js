
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
//import registerServiceWorker from "./registerServiceWorker"

import Routers from './router';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('root'));

//registerServiceWorker()