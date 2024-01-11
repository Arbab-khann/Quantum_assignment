import Adminpage from "./Adminpage";
import Home from "./login/Home";
import Login from "./login/Login";
import Register from "./login/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routecompo() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminPage" element={<Adminpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routecompo;
