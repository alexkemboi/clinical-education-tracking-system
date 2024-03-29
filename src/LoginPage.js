import React, { useState } from "react";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import "./components/styles/Login.css";
import StudentDashboard from "./components/StudentDashboard";
export let userName = "";
export  let studentIdNumber="";
export let systemUserType = "";

const LoginPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [userType, setUserType] = useState("1");
  const [showStudentDashboard, setShowStudentDashboard] = useState(false);

  function handleSignupClick() {
    setShowSignUpForm(true);
    setShowLoginForm(false);
    setShowDashboard(false);
  }
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handleLogin(e) {
    systemUserType = userType;
    if(userType == undefined|| email==""|| password==""){
      setErrorMessage("Invalid credentials");
    }else{
      e.preventDefault();
      fetch(
        `http://localhost:3001/usersDetails?email=${email}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {           
  
            if (userType !== undefined) {
              if (userType == 1) {
                setShowDashboard(true);
                setShowLoginForm(false);
                userName = data[0].firstName + " " + data[0].secondName;
                studentIdNumber=data[0].id;
              
              } else if (userType == "2" ||userType == "3") {
                setShowStudentDashboard(true);
                userName = data[0].firstName + " " + data[0].secondName;
               
                studentIdNumber=data[0].id;
                setShowLoginForm(false);
              }
            } else {
              userName = data[0].firstName + " " + data[0].secondName;
              studentIdNumber=data[0].id;
              setErrorMessage("Invalid Password or username");
              setShowDashboard(true);
              //setShowLoginForm(true);
            }
            setErrorMessage("Select type of user");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          //setShowLoginForm(true);
          setErrorMessage("Server error");
          setShowDashboard(true);
          setShowLoginForm(false);
        });
  
      setShowSignUpForm(false);
    }

  
  }

  return (
    <>
      {showLoginForm && (
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header bg-dark text-white text-center">
                  <i className="fas fa-user-md text-warning fa-3x"></i>
                  <h4 className="mb-0 font-weight-bold" style={{ fontSize: '2rem' }}>
  MedConnect System
</h4>

                </div>
                <div className="card-body">
                  <form className="form" id="loginForm">
                    {errorMessage && (
                      <div className="error-container">
                        <h6 className="error-message text-danger text-center">
                          {errorMessage}
                        </h6>
                      </div>
                    )}
                    <div className="form-group">
                      <label htmlFor="user">User</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                        <select
                          className="form-control"
                          value={userType}
                          onChange={handleUserTypeChange}
                        >
                          <option value="1" key="1">
                            Administrator
                          </option>
                          <option value="2" key="2">
                            Student
                          </option>
                          <option value="3" key="3">
                            Supervisor
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-lock"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      className="btn btn-dark btn-block"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <div className="row mt-4">
                      <div className="col-8">
                        {" "}
                        <label className="text-primary text-center">
                          Don't you have an account?
                        </label>
                      </div>
                      <div className="col-4">
                        <button
                          type="submit"
                          className="btn btn-warning btn-block"
                          onClick={handleSignupClick}
                        >
                          SignUp
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showSignUpForm && <Signup />}
      {showDashboard && <Dashboard />}
      {showStudentDashboard && <StudentDashboard />}
    </>
  );
};

export default LoginPage;
