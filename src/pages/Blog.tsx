import React from "react";
import logo from "../images/20231223_170621_0000-removebg-preview.png";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div className="mainContent">
      <div className="Header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="textTitle">
        <h1>Administrador del blog</h1>
      </div>

      <div className="gridHome">
        <NavLink to={"/upblog"} className="buttonCard">
          <h1>Nuevo blog</h1>
        </NavLink>

        <NavLink to={"/adminblog"} className="buttonCard">
          <h1>Administrar Blogs</h1>
        </NavLink>

        <NavLink to={"/admincategory"} className="buttonCard">
          <h1>Nueva Categoria</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Blog;
