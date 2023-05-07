import React, { useState } from "react";
import LoginPage from "../LoginPage";
function Signup() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  function handleLogin() {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  }
  return (
    <>
      {showSignUpForm && (
        <div className="row">
          <div className="col-4 m-auto">
            <form className="container">
              <div class="card">
                <div class="card-header bg-dark text-white text-center">
                  <i class="fas fa-user-md fa-3x"></i>
                  <h4 class="mb-0">
                    {" "}
                    Signup Clinical Education Tracking System
                  </h4>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label for="first-name">
                      <i class="fas fa-user"></i> First Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="second-name">
                      <i class="fas fa-user"></i> Second Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">
                      <i class="fas fa-envelope"></i> Email:
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">
                      <i class="fas fa-lock"></i> Password:
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="confirm-password">
                      <i class="fas fa-lock"></i> Confirm Password:
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirm-password"
                      name="confirm-password"
                      required
                    />
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="terms"
                      name="terms"
                      required
                    />
                    <label class="form-check-label" for="terms">
                      I agree to the <a href="#">Terms and Conditions</a>.
                    </label>
                  </div>
                  <button type="submit" class="btn btn-dark">
                    Sign Up
                  </button>
                  <div>
                    <div className="row mt-4">
                      <div className="col-8">
                        <p className="text-danger">Already registered?</p>
                      </div>
                      <div className="col-4">
                        <button
                          className="btn btn-warning"
                          onClick={handleLogin}
                        >
                          Back to login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {showLoginForm && <LoginPage />}
    </>
  );
}
{
}

export default Signup;
