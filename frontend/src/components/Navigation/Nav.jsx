import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../contexts/UserContext";
import "./navStyle.css";

function Nav() {
  const navigate = useNavigate();
  const { user, handleUser } = useContext(User.UserContext);

  const handleLogOut = () => {
    handleUser(null);
    navigate("/");
  };

  return (
    <nav>
      <ul className="navContainer">
        <div className="homeNavigation">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
        <div className="pagesNavigation">
          {user?.isAdmin === 1 && (
            <button type="button" onClick={() => navigate("/Admin")}>
              Administration
            </button>
          )}
          {!user && (
            <button type="button" onClick={() => navigate("/Login")}>
              Login
            </button>
          )}
          {user && (
            <button type="button" onClick={handleLogOut}>
              Logout
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
