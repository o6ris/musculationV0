import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "@components/Navigation/Nav";
import Admin from "@pages/Admin/Admin";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
