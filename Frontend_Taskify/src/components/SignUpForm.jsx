import React, { useState } from "react";
import PincodeLocation from "./PincodeLocation"; // Import PincodeLocation component
import "./SignUpForm.css"; // Import the CSS for styling
import taskifyLogo from "../assets/images/favicon-taskify.png"; // Import Taskify logo (make sure it's in your project folder)

const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addressDetails, setAddressDetails] = useState({
    pincode: "",
    houseName: "",
    streetName: "",
    landmark: "",
    city: "",
    state: "",
    country: "India",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Proceed with form submission
    console.log("Form Data Submitted:", {
      fullName,
      email,
      phoneNumber,
      addressDetails,
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Taskify Logo */}
        <img src={taskifyLogo} alt="Taskify Logo" className="taskify-logo" />

        {/* Title */}
        <h2 className="signup-title">Sign Up to Taskify</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-input"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address Details */}
          <PincodeLocation
            setAddressDetails={setAddressDetails}
            addressDetails={addressDetails}
          />

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="Re-enter password"
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
