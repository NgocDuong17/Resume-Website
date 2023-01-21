import CuaHeader from "./CuaHeader"
import CuaAbout from "./CuaAbout"
import CuaCertification from "./CuaCertification"
import {Switch, Route, NavLink, HashRouter } from "react-router-dom"
import CuaEducation from "./CuaEducation"
import logo from './images/hi2.png'
import CuaFeedBack from "./CuaFeedBack"
import MyForm from "./CuaFeedBack"

const CuaMainPage = () =>{
    return(
        <HashRouter>
        <div>
            <CuaHeader/>
            
          <div className = "content">
          
         
            <Switch>               
                <Route path = "/CuaAbout" exact component = {CuaAbout}/>
                <Route path = "/CuaCertification" component = {CuaCertification}/>
                <Route path = "/CuaEducation" component = {CuaEducation}/>  
                <Route path = "/CuaFeedBack" component = {CuaFeedBack}/>        
            </Switch>
            <img className = 'img2' src = {logo} alt = '' />
          </div> 
          <p >
           <ul className = "footer">
           
                <li>Email : bngoc4991@gmai.com</li>
                <li>Phone Number : +84 947 047 389</li>
                <li>LinkedIn : <a href = "https://www.linkedin.com/in/ngoc-duong-5947491b7/">LinkedIn.ngocduong</a></li>
            
           </ul>
           </p>       
      </div>  
         
        </HashRouter>
        
    )
}

export default CuaMainPage