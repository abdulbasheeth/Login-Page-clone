import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import NetflixImg from "./aassets/Netflix.jpg";


function Success() {
  return (
    <div className="sucess-container" style={{
            backgroundImage: `url(${NetflixImg})`, }}> 
      <div className="success-description">
        <h1 className="netflix-logo">Login Successful!</h1>
        <input className="input-success" placeholder="Search Movie" />
        <br />
        <Link className="log-out" to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Success;
