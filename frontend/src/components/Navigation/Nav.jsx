import React from "react";
import { useNavigate } from "react-router-dom";
import "./navStyle.css";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="navContainer">
        <div className="homeNavigation">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
        <div className="pagesNavigation">
          <button type="button" onClick={() => navigate("/Admin")}>
            Administration
          </button>
          <button type="button" onClick={() => navigate("/Login")}>
            Login
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
