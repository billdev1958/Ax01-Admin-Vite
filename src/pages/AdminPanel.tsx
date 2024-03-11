import React from "react";
import logo from "../images/20231223_170621_0000-removebg-preview.png";
import { NavLink } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="mainContent">
      <div className="Header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="textTitle">
        <h1>Panel administrador</h1>
      </div>
      <div className="gridHome">


        <NavLink to={"/upblog"} className="buttonCard">
          <h1>Administrar usuarios</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminPanel;
