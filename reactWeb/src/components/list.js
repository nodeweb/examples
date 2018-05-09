import React, { Component } from 'react';
import {connect} from 'react-redux';
import {glist} from "../actions"


 class Main extends Component {


  render() {
    const list = this.props.list;
    return (
     <div> 
      <div onClick={()=>this.props.glist({"msg":"hao123"})}>获取数据</div>
      <ul>
        {
          list.map((item, index) =>
            <li key={index}>我叫：{item["ID"]}</li>
          )
        }
      </ul>
      </div>
    )
  }
}

function select(state){
    const list = state.list;
    return {list:list}
}


export default connect(select,{glist})(Main);

