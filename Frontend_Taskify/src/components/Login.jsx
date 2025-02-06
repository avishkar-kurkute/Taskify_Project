import React, { useState } from "react";
import "./Login.css";
import Logo from "../assets/images/favicon-taskify.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Email:",
      email,
      "Password:",
      password,
      "Remember Me:",
      rememberMe
    );
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Co-Tasker Branding */}
        <img src={Logo} alt="Co-Tasker Logo" className="logo" />
        <h2 className="login-title">Sign in to Taskify</h2>
        <p className="login-tagline">Connect with trusted professionals</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" className="btn-submit">
            Sign In
          </button>
        </form>

        <div className="links">
          <Link className="signup-link" to={"/login/signup"}>
            New here? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
