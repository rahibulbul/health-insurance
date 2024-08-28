import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateUsername = () => {
    if (username.trim() === "") {
      setUsernameError("Username cannot be empty");
    } else {
      setUsernameError("");
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.trim() !== "") {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim() !== "") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validatePassword();

    if (username.trim() && password.trim()) {
      console.log("Login successful");
      navigate("/empDashboard");
    }
  };

  return (
    <div className="screen">
      <div className="web-container login">
        <div className="login-title">
          <h2>Hello there!</h2>
          <p>Please login to start your session.</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-input-components">
              <div className="login-input">
                <input
                  className="login-inputBox"
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  onBlur={validateUsername}
                  required
                />
                <i className="ph ph-user login-icon-left" />
                {usernameError ? (
                  <i className="fa-solid fa-circle-exclamation login-icon-right"></i>
                ) : (
                  username && (
                    <i className="fa-solid fa-check-circle login-icon-right"></i>
                  )
                )}
                <label className="login-input-label" htmlFor="username">
                  Enter your username
                </label>
                {usernameError && (
                  <span
                    className={`login-form-error ${
                      usernameError ? "show" : ""
                    }`}
                  >
                    {usernameError}
                  </span>
                )}
              </div>
              <div className="login-input">
                <input
                  className="login-inputBox"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={validatePassword}
                  required
                />
                <i className="ph ph-lock login-icon-left" />
                <i
                  className={`ph ${
                    passwordVisible ? "ph-eye-slash" : "ph-eye"
                  } login-pass-show`}
                  onClick={togglePasswordVisibility}
                />
                {passwordError ? (
                  <i className="fa-solid fa-circle-exclamation login-icon-right"></i>
                ) : (
                  password && (
                    <i className="fa-solid fa-check-circle login-icon-right"></i>
                  )
                )}
                <label className="login-input-label" htmlFor="password">
                  Enter your password
                </label>
                {passwordError && (
                  <span
                    className={`login-form-error ${
                      passwordError ? "show" : ""
                    }`}
                  >
                    {passwordError}
                  </span>
                )}
              </div>
            </div>
            <div className="form-login-checkbox-forgot">
              <div className="login-form-checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <div className="login-form-forgot">
                <Link to="#" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="form-login-button">
              <input type="submit" value="Sign In" className="loginButton" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
