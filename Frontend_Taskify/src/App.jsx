import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import TaskerSignUp from "./components/TaskerSignUp";
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
        <Route path="/tasker" element={<TaskerSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
