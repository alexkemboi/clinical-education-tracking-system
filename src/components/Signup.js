import React, { useState } from "react";
import LoginPage from "../LoginPage";
import * as bootstrap from "bootstrap";

function Signup() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  function handleLogin() {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  }
  const handleSignup = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userData = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: password,
    };
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        if (data) {
          const form = document.querySelector("form");
          form.addEventListener("submit", (event) => {
            event.preventDefault();
            // Your form submission code here
            // Show the success modal
            const successModal = new bootstrap.Modal(
              document.getElementById("successModal")
            );
            successModal.show();
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {showSignUpForm && (
        <div className="row">
          <div className="col-4 m-auto">
            <form className="container">
              <div className="card">
                <div className="card-header bg-dark text-white text-center">
                  <i className="fas fa-user-md fa-3x"></i>
                  <h4 className="mb-0">
                    {" "}
                    Signup Clinical Education Tracking System
                  </h4>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label for="firstName">
                      <i className="fas fa-user"></i> First Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="secondName">
                      <i className="fas fa-user"></i> Second Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="secondName"
                      name="secondName"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      <i className="fas fa-envelope"></i> Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">
                      <i className="fas fa-lock"></i> Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="confirm-password">
                      <i className="fas fa-lock"></i> Confirm Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirm-password"
                      required
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                      name="terms"
                      required
                    />
                    <label className="form-check-label" for="terms">
                      I agree to the <a href="#">Terms and Conditions</a>.
                    </label>
                  </div>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#successModal"
                    className="btn btn-dark"
                    onClick={handleSignup}
                  >
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
                <i className="fas fa-check fa-3x text-success"></i>
                Success!
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
              Your data has been submitted successfully.
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
    </>
  );
}
{
}

export default Signup;
