import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from "react-loadable"
import Loading from  "./components/loading"

const Main = Loadable({
    loader:() => import("./components/app"),
    loading:Loading,
})

const TopNav = Loadable({
    loader:() => import("./components/TopNav"),
    loading:Loading
})


const List = Loadable({
    loader:() => import("./components/list"),
    loading:Loading
})

const NotFound = Loadable({
    loader:() => import("./components/notfound"),
    loading:Loading
})

function Routers() {
    return (
      <Router>
        <div>
            {/* 这里可以公共的样式,比如 头部, 尾部, 等.*/}
            {/*结合Switch组件可以匹配到都匹配不到的路劲,404等...*/}
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/list'  component={List}/>
                <Route path="/nav" component={TopNav}/>
                <Route path="/loading" component={Loading}/>
                <Route component={NotFound}/>
            </Switch>
            {/** 这里可以公共的样式,比如 头部, 尾部, 等.*/}
        </div>
      </Router>
    )
}

export default Routers
