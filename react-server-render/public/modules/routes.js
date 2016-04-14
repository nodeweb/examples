import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import App from './index'
import About from './about';
import Repos from './repos';
import Repo  from './repo';
import Home  from './home';

module.exports=(
  <Router history={hashHistory}>
   <Route path='/' component={App}>
     <IndexRoute component={Home}/>
     <Route path='/repos' component={Repos}>
       <Route path='/repos/:userName/:repoName' component={Repo}/>
     </Route>
     <Route path='/about' component={About}/>
   </Route>
  </Router>
);
