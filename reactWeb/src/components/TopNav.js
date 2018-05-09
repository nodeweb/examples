import React from "react"
import {Route, Link} from "react-router-dom"
import Loading from  "./loading"
import Loadable from "react-loadable"

const Home = Loadable({
    loader:() => import("./home"),
    loading:Loading
})

const About = Loadable({
    loader:() => import("./about"),
    loading:Loading
})

export default function TopNav({match}) {


		return(
	       <div>
	       	 <div>======TopNav======</div>
             <div><Link to={`${match.url}/home`}>HOME</Link></div>
             <div><Link to={`${match.url}/about`}>ABOUT</Link></div>
	       	 <Route path={`${match.url}/home`}  component={Home}/>
             <Route path={`${match.url}/about`} component={About}/>
             <Route exact path={match.url} component={Loading}/>
	       </div>
		)

}