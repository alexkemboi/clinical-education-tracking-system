import React, { useState } from "react";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import * as bootstrap from "bootstrap";
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
  const [errorModal, setErrorModal] = useState(false);
  function handleLogin() {
    fetch(
      `http://localhost:3000/usersDetails?email=${email}&password=${password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].email);
        // do something with the retrieved data
        if (data[0].email === email && data[0].password === password) {
          setShowDashboard(true);
          setErrorModal(false);
        } else {
          setErrorModal(true);
          const successModal = new bootstrap.Modal(
            document.getElementById("successModal")
          );
          successModal.show();
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
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <div class="card-header bg-dark text-white text-center">
                  <i class="fas fa-user-md fa-3x"></i>
                  <h4 class="mb-0"> Clinical Education Tracking System</h4>
                </div>
                <div class="card-body">
                  <form class="form">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="Enter email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-lock"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Enter password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      // data-bs-toggle="modal"
                      // data-bs-target="#successModal"
                      class="btn btn-dark btn-block"
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
                          class="btn btn-warning btn-block"
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
      {/* {errorModal && (
        <div
          className="modal fade"
          id="successModal"
          tabindex="-1"
          aria-labelledby="successModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-dark">
                <h5 className="modal-title text-light" id="successModalLabel">
                  {" "}
                  <i className="fas fa-times-circle fa-3x text-danger"></i>
                  Failed!
                </h5>
                <button
                  type="button"
                  className="btn btn-dark btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fas fa-times text-light"></i>
                </button>
              </div>
              <div className="modal-body">
                Please check your username or password and try again
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default LoginPage;
