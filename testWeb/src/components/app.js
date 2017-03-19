import React,{Component} from 'react';
import {Link} from 'react-router';

class Main extends Component {
    render(){
      return(
         <div>
           <div><Link to='/'>Home</Link></div>
           <div><Link to='/about'>About</Link></div>
           <div><Link to='/list'>List</Link></div>
           {this.props.children}
         </div>
      )
    }
}

module.exports = Main;