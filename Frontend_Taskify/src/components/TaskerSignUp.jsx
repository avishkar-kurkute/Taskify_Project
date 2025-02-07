import React, { useState } from "react";
import "./TaskerSignUp.css";
import logo from "../assets/images/favicon-taskify.png"; // Taskify logo

const TaskerSignUp = () => {
  const [taskerData, setTaskerData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    category: "Pet Care",
    area: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setTaskerData({ ...taskerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskerData.password !== taskerData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Tasker Data Submitted:", taskerData);
  };

  return (
    <div className="tasker-signup-container">
      <div className="tasker-signup-box">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Taskify Logo" className="taskify-logo" />
        </div>

        <h2 className="tasker-signup-title">Join as a Tasker</h2>
        <p className="signup-subtext">
          Start earning by offering your services!
        </p>

        <form onSubmit={handleSubmit} className="tasker-signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={taskerData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={taskerData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={taskerData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="input-group">
            <label>Category</label>
            <select
              name="category"
              value={taskerData.category}
              onChange={handleChange}
              required
            >
              <option value="Pet Care">Pet Care</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>

          <div className="input-group">
            <label>Area</label>
            <input
              type="text"
              name="area"
              value={taskerData.area}
              onChange={handleChange}
              required
              placeholder="Enter your service area"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={taskerData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={taskerData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Re-enter password"
            />
          </div>

          <button type="submit" className="btn-submit">
            Sign Up as Tasker
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskerSignUp;
