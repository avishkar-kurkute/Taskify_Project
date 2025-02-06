import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
//<Route path="/login" element={<Login />} /> {/* Login route */}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route
          path="/login"
          element={
            <div className="login-page">
              <Login />
            </div>
          }
        />{" "}
        <Route path="/login/Signup" element={<SignUpForm />} />
        {/* Login route with background */}
      </Routes>
    </Router>
  );
}

export default App;
