import React from 'react'
import './sidebar.css'
import logo from '../../assets/TMLCLOGO.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
        <img src={logo} alt="logo" className="logo"/>
            <div className="navbar"> 
            <div class="line">
                  <hr/>
                </div>
                <h3 className="navdata">HOME</h3>
                <div class="line">
                  <hr/>
                </div>
             
                <h3 className="navdata">ABOUT</h3>
                <div class="line">
                  <hr/>
                </div>
             
                <h3 className="navdata">SERVICES</h3>
                <div class="line">
                  <hr/>
                </div>
             
                <h3 className="navdata">TOOLS</h3>
                <div class="line">
                  <hr/>
                </div>
                  <h3 className="navdata">ACADEMY</h3>
                <div class="line">
                  <hr/>
                </div>
             
                <h3 className="navdata">CONTACT</h3>
      
                 
                 
                

            </div>
        </div>
    )
}

export default Sidebar
