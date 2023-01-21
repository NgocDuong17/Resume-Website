import CuaAbout from './CuaAbout'
import CuaEducation from './CuaEducation'
import CuaCertification from './CuaCertification'
import App from './App.css'
import {Link} from 'react-router-dom'
import CuaMainPage from './CuaMainPage'
import CuaFeedBack from './CuaFeedBack'

const CuaHeader =()=>{
    return(
        <div>
            <h1 align = "center" ><a className ="bigtitle" href = "/CuaMainPage">Ngoc Duong Portfolio</a></h1>
            <ul className = "header">       
                <li><Link to = "/CuaAbout">ABOUT ME</Link></li>
                <li><Link to = "/CuaCertification">CERTIFICATIONS</Link></li>
                <li><Link to = "/CuaEducation">EDUCATION</Link></li>
                <li><Link to = "/CuaFeedBack">FEEDBACK</Link></li>
            </ul>
        </div>
    )
}

export default CuaHeader