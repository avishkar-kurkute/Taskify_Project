import React, { useState } from "react";
import "./TaskerSignUp.css"; // Updated CSS
import logo from "../assets/images/favicon-taskify.png"; // Your Taskify logo
import taskerImage from "../assets/images/tasker-image.jpg"; // Sample tasker image

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
      {/* Left Section: Image */}
      <div className="tasker-image">
        <img src={taskerImage} alt="Tasker" />
      </div>

      {/* Right Section: Form */}
      <div className="tasker-signup-box">
        {/* Logo at the top */}
        <div className="logo-container">
          <img src={logo} alt="Taskify Logo" className="taskify-logo" />
        </div>

        <h2 className="tasker-signup-title">Earn money your way</h2>
        <p className="signup-subtext">
          See how much you can make tasking on Taskify
        </p>

        <form onSubmit={handleSubmit} className="tasker-signup-form">
          <div className="input-group">
            <label>Select your area</label>
            <select
              name="area"
              value={taskerData.area}
              onChange={handleChange}
              required
            >
              <option value="">Select your area</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>

          <div className="input-group">
            <label>Choose a category</label>
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

          {/* Earnings Display (Optional) */}
          <h3 className="earnings">
            $60 <span>per hour</span>
          </h3>

          <button type="submit" className="btn-submit">
            Get Started
          </button>
        </form>

        <p className="signin-text">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default TaskerSignUp;
