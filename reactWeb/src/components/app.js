import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
    render(){
      return(
         <div>
           <div><Link to='/nav'>TopNav</Link></div>
           <div><Link to='/list'>List</Link></div>
         </div>
      )
    }
}

export default Main;