import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import LeftbarLandingpage from "../components/LeftbarLandingpage";
import googleIcon from "../assets/search.png";
import appleIcon from "../assets/apple.png";

const SignIn = () => {
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    navigate("/base");
  };

  return (
    <div className="SignIn-page">
      <LeftbarLandingpage />
      <div className="signIn-div">
        <div className="formdiv">
          <span className="heading">SignIn</span>
          <span className="p">Sign in to your account</span>
          <div className="signin_btns">
            <div>
              <img src={googleIcon} alt="icon" />
              Sign in with Google
            </div>
            <div>
              <img src={appleIcon} alt="icon" />
              Sign in with Apple
            </div>
          </div>
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <label htmlFor="mail">Email Address : </label>
            <input type="email" value={"test@mail.com"} id="mail" />

            <label htmlFor="pass">Password : </label>
            <input type="password" value={"test123"} id="pass" />
            <span className="forgot">Forgot password ?</span>
            <input
              type="submit"
              style={{
                color: "white",
                background: "rgb(73, 113, 247)",
                cursor: "pointer",
              }}
            />
          </form>
          <span className="register-btn">
            Don't have an account ? <span>Register</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
