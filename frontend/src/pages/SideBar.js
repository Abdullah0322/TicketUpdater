import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./animate.min.css";
import "./demo.css";

import "./light-bootstrap-dashboard-react.css"
const Sidebar=(color, image, routes )=>{

return(
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
        <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img
                src={require("../assets/img/reactlogo.png").default}
                alt="..."
              />
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
           Daily Ticket Update
          </a>
        
      </div>
      </div>
      </div>
);

}

export default Sidebar