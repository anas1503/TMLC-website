import React from 'react'
import Sidebar from './Sidebar'
import './landing.css'

const Landing = () => {
    return (
        <>
           <div className="container">
            <Sidebar/>
            <div className="landing">
            <div className="vid">   
             
            </div>

            <div className="title">
                <p>T H E &nbsp;  M A C H I N E </p>
                <p style={{color:"#00FFFF",letterSpacing:"10px",fontWeight:"bolder",marginTop:"12px"}}>LEARNING COMPANY</p>
                <p style={{fontSize:"15px",fontWeight:"lighter",marginTop:"20px"}}>LEARN | IMPROVISE | GROW</p>
            </div>
            </div>
         
           </div> 
        </>
    )
}

export default Landing
