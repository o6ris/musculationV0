import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiConnection from "@services/apiConnection";
import User from "../../contexts/UserContext";

function Login() {
  const { handleUser } = useContext(User.UserContext);
  const [userInfo, setUserInfo] = useState({
    alias: "",
  });
  const navigate = useNavigate();

  const handleInputOnChange = (place, value) => {
    const newUser = { ...userInfo };
    newUser[place] = value;
    setUserInfo(newUser);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    apiConnection
      .post(`/login`, userInfo)
      .then((curentUser) => {
        handleUser(curentUser.data);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form>
        <label htmlFor="alias">Alias</label>
        <input
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
          type="text"
          name="alias"
          value={userInfo.alias}
        />
        <button onClick={handleLogin} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
