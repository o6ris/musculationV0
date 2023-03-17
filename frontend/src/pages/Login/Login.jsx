import React from "react";
// import User from "../../contexts/UserContext";

function Login() {
  // const { handleUser } = useContext(User.UserContext);
  return (
    <div>
      <form>
        <label htmlFor="alias">Alias</label>
        <input type="text" name="alias" />
      </form>
    </div>
  );
}

export default Login;
