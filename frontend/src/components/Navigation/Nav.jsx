import React from "react";
import { useNavigate } from "react-router-dom";
import "./navStyle.css";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="nav">
        <button type="button" onClick={() => navigate("/")}>
          Home
        </button>
        <button type="button" onClick={() => navigate("/Admin")}>
          Administration
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
