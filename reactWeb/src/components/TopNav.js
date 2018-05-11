import React from "react"
import {Route, Link, Redirect} from "react-router-dom"
import Loading from  "./loading"
import Loadable from "react-loadable"

const ok =true;

const Home = Loadable({
    loader:() => import("./home"),
    loading:Loading
})

const About = Loadable({
    loader:() => import("./about"),
    loading:Loading
})

const TopicId = ({match}) => {
   return (
        <div>访问id={match.params.Id}</div>
   )
} 

const PriveRoute = ({component:Comp,path,...rest}) => (
    <Route
        {...rest}
        render={ props =>
              ok ? (
                <Comp {...props} />
              ):(
                <Redirect to={"/loading"}/>
              )
        }
    />
)

export default function TopNav({match}) {
	return(
       <div>
       	 <div>======TopNav======</div>
         <div><Link to={`${match.url}/home`}>HOME</Link></div>
         <div><Link to={`${match.url}/about`}>ABOUT</Link></div>
       	 <Route path={`${match.url}/home`}  component={Home}/>
         <Route path={`${match.url}/about`} component={About}/>
         <Route path={`${match.url}/app/:Id`} component={TopicId} />
         <PriveRoute path={match.url} component={Loading} />
       </div>
	)
}