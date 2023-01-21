import { CartesianGrid,Tooltip, XAxis,YAxis,ResponsiveContainer,BarChart,Bar, RadarChart, Radar,PolarGrid,Legend,PolarAngleAxis,PolarRadiusAxis } from "recharts";
import img1 from './images/03.jpg';
import tw from './images/tw.png';
import ps from './images/ps.png';
import ct from './images/ct.png';
import gd from './images/gd.png';
import is from './images/is.png';
import ls from './images/ls.png';
import lt from './images/lt.png';
import it from './images/it.png';

export default function CuaAbout(){
    const data_radar = [
        {name:"HTML", A:70 ,fullMark:100},
        {name:"Python", A:84 ,fullMark:100},
        {name:"Tableau", A:93 ,fullMark:100},
        {name:"SQL", A:63 ,fullMark:100},
        {name:"JavaScript", A:81 ,fullMark:100},
        {name:"RStudio", A:69 ,fullMark:100}
    ]
   
    const data_bar = [
        {name:"English",level: 82},
        {name:"Japanese",level: 59},
        {name:"Vietnamese",level: 100},
        {name:"Chinese",level:30},
        {name:"French", level : 89}
       
    ]

    return(
        <>
        <div>
            <div>
                <ul className="objectives">            
            <li> <img className = 'img' src = {img1} alt = '' width = '200'/></li>      
            <li><h1 className = "mycolor" align = 'left' >Objectives</h1>
            <p align = 'left'  >A Data Science undergraduate who loves working with numbers and is willing 
            to challenge herself towards demanding situations. Also a quick-learning and
             adaptable individual seeking to learn as well as contribute analytical skills
              to the benefit of the company.</p></li>
                </ul>
            </div>


            <div>
            <div>
            <h1 className = "skills" align = 'center' >Skills</h1>
            <h2>Hard Skills</h2>
                <ResponsiveContainer width = "70%" aspect = {2}>
                    <BarChart data = {data_bar} margin={{top : 90, left : 300}} >
                        <CartesianGrid stroke = "#f5f5f5"/>
                        <XAxis interval = {'preserveStartEnd'} dataKey ="name" />
                        <YAxis/> 
    
                        <Tooltip contentStyle={{backgroundColor:"white"}}/>
                        <Bar type ="monotone" stroke ="rgba(228, 191, 135, 0.999)" fill ="rgba(248, 210, 159, 0.36)" dataKey = "level" />
                        
                    </BarChart>               
                </ResponsiveContainer>   
                <h3 className = 'charttitle' align ='center' >Languages Proficiency</h3>
                </div>
    
                <div>
                <ResponsiveContainer width = '80%' aspect = {3}>
                    <RadarChart cx={580} cy = {200} outerRadius={100} data = {data_radar} >
                        <PolarGrid stroke = "#f5f5f5"/>
                        <PolarAngleAxis  dataKey = 'name'/>
                        <PolarRadiusAxis/>
                        <Tooltip contentStyle ={{backgroundColor:'white'}}/>
                        <Radar  stroke = 'rgba(105, 202, 204, 0.604)' fill = 'rgba(159, 211, 245, 0.36)' dataKey = 'A'/>
                    </RadarChart>
                </ResponsiveContainer>
                <h3 className = 'charttitle' align ='center'>Programming Skills</h3>
                </div>
                <h2>Soft Skills</h2>
            
            <ul className = 'hi' >
                
                <li><img src = {tw} alt = '' width = '40'/> Team Work</li>
                <li><img src = {ps} alt = '' width = '40'/>Problem Solving</li>
                <li><img src = {lt} alt = '' width = '40'/>Logical Thinking</li>
                <li><img src = {gd} alt = '' width = '40'/>Graphical Designing</li>
                
                <li><img src = {ls} alt = '' width = '40'/>Leadership</li>
                <li><img src = {it} alt = '' width = '40'/>Adaptability </li>
                <li><img src = {is} alt = '' width = '40'/>Communication </li>               
                <li><img src = {ct} alt = '' width = '40'/>Critical Thinking</li>
                

            </ul>
            
            </div>    
        </div>

       
        </>
    )
}

