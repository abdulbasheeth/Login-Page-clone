import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


function Fail() {
  return (
    <div className="fail-container">
      <div className="fail-description">
        <h1>Login Failed!</h1>
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default Fail;
