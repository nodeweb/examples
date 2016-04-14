import React from 'react';
import NavLink from './navlink';
import {IndexLink,Link} from 'react-router';

export default class App extends React.Component {
   render() {
     return (
       <div>
        <h1>React Router Tutorial</h1>
        <ul role='nav'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About1</NavLink></li>
          <li><NavLink to='/repos'>Repos1</NavLink></li>
        </ul>
        {this.props.children}
       </div>
     );
   }
}

