import React from "react";
import "./style.css";
import ValidatedInput from "../../../components/textInput/ValidatedInput";
import ValidateButton from "../../../components/buttonInput/ValidateButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="screen">
      <div className="web-container login">
        <div className="login-title">
          <h2>Hello there! 👋🏻</h2>
          <p>Please login to start your session.</p>
          <form action="#" className="login-form">
            <div className="form-components">
              <ValidatedInput
                label="Enter your username"
                errorMessage="Username must be 3-15 characters long."
                requiredMessage="Username cannot be empty."
              />
            </div>
            <div className="form-components">
              <ValidatedInput
                label="Enter your password"
                errorMessage="Please enter a valid password."
                requiredMessage="Password cannot be empty."
              />
            </div>
            <div className="form-check-forget">
              <div className="form-check">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <div className="form-forget">
                <Link to="#" className="forget-pass">
                  Forget password?
                </Link>
              </div>
            </div>
            <div className="form-button">
              <ValidateButton text="Sign In" />
            </div>
            <div className="registration-link-login">
              <span>Don't have account?</span>
              <Link to="/registration" className="register-link">
                Click here to register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
