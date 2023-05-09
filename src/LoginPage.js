import React, { useState } from "react";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
const LoginPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  function handleSignupClick() {
    setShowSignUpForm(true);
    setShowLoginForm(false);
    setShowDashboard(false);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
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
        console.log(data);
        // do something with the retrieved data
        if (data.length > 0) {
          setShowDashboard(true);
        } else {
          setShowDashboard(false);
          setShowLoginForm(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setShowSignUpForm(false);
    setShowLoginForm(false);
  }

  return (
    <>
      {showLoginForm && (
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header bg-dark text-white text-center">
                  <i className="fas fa-user-md fa-3x"></i>
                  <h4 className="mb-0"> Clinical Education Tracking System</h4>
                </div>
                <div className="card-body">
                  <form className="form" id="loginForm">
                    <div className="form-group">
                      <label for="email">Email</label>
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
                      <label for="password">Password</label>
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
                      data-bs-toggle="modal"
                      data-bs-target="#successModal"
                      className="btn btn-dark btn-block"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <div className="row mt-4">
                      <div className="col-8">
                        {" "}
                        <label className="text-danger text-center">
                          Don't you have account?
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
    </>
  );
};

export default LoginPage;
