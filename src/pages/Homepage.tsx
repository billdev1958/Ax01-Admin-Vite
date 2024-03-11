import React from "react";
import logo from "../images/20231223_170621_0000-removebg-preview.png";

function Homepage() {

    return(
        <div className="mainContent">
           
            <div className="Header">
                <img src={logo} className="logo" alt="logo" />
                
            </div>
        <div className="textTitle"><h1>Bienvenido a Ax01</h1></div>
            <div className="gridHome">
                <div className="gridCard">
                    <h1>Website views</h1>
                    <h1 className="siteData">200</h1>
                </div>
                <div className="gridCard">
                    <h1>Articles up</h1>
                    <h1 className="siteData">200</h1>
                </div>
                <div className="gridCard">
                    <h1>Colaboradores </h1>
                    <h1 className="siteData">200</h1>
                </div>
            </div>

        </div>
    )

}

export default Homepage