import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './App.css';
import NetflixImg from "./assets/Netflix.jpg";


function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleUser(evt) {
    setUser(evt.target.value);
  }

  function handlePass(evt) {
    setPass(evt.target.value);
  }

  function check() {
    axios
      .get(
        `https://basheethloginclone-1.onrender.com/login?username=${user}&password=${pass}`
      )
      .then((res) => {
        if (res.data === true) {
          navigate("/Success");
        } else {
          navigate("/Fail");
        }
      })
      .catch((err) => {
        console.error(err);
        navigate("/Fail");
      });
  }

  return (
    <>
      <div className="home-container"
      style={{
        backgroundImage: `url(${NetflixImg})`, }}>
        <h1 className="netflix-logo">Netflix Login</h1>
        <div className="container">
          <input
            onChange={handleUser}
            value={user}
            className="input-box1"
            name="username"
            placeholder="Username"
          />
          <br />
          <input
            onChange={handlePass}
            value={pass}
            className="input-box2"
            name="password"
            placeholder="Password"
            type="password"
          />
          <button onClick={check} className="btn">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
