import { useNavigate } from "react-router-dom";

import "./loginStyle.css";

const Home = () => {
  const navi = useNavigate();
  const toRegister = () => {
    navi("/register");
  };
  return (
    // main component which is showing default

    <div className="home-container">
      <h1>Welcome to Login Page</h1>
      <button className="login-button" onClick={toRegister}>
        Login
      </button>
    </div>
  );
};

export default Home;
