
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Mock from "./mock"
//import registerServiceWorker from "./registerServiceWorker"

import Routers from './router';

const store = configureStore()

if(process.env.NODE_ENV === 'development'){
	Mock.setup()
}

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('root'));

//registerServiceWorker()