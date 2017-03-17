import React, { Component } from 'react';
import {connect} from 'react-redux';

 class Main extends Component {

  componentWillMount() {
    this.props.dispatch({type:'GET_LIST'})
  }

  render() {
    const list = this.props.list;
    return (
      <ul>
        {
          list.map((item, index) =>
            <li key={index}>我叫：{item._id}</li>
          )
        }
      </ul>
    )
  }
}

function select(state){
    const list = state.list;
    return {list:list}
}


export default connect(select)(Main);

