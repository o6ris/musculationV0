import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import Nav from "@components/Navigation/Nav";
import Admin from "@pages/Admin/Admin";
import Login from "@pages/Login/Login";
import Home from "./pages/Home/Home";
import User from "./contexts/UserContext";

import "./App.css";

function App() {
  const { user } = useContext(User.UserContext);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Admin"
            element={
              user?.isAdmin === 1 ? <Admin /> : <Navigate replace to="/" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
