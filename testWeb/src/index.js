
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import {Router,browserHistory} from 'react-router';

import routes from './router';


ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes}/>      
  </Provider>,
document.getElementById('app'));