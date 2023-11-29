import React, { useState } from "react";
import LoginPage from "../LoginPage";
import StudentRegistratiion from "./StudentRegistration";
import SupervisorsPanel from "./SupervisorsPanel";
import { userName, systemUserType } from "../LoginPage";
const StudentDashboard = () => {
  const [showHome, setShowHome] = useState(true);
  const [showStudentPortal, setShowStudentPortal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showStudentDashboard, setShowStudentDashboard] = useState(true);
  const [showSupervisorDashboard, setShowSupervisorDashboard] = useState(false);
  const [showLogoContainer, setShowLogoContainer] = useState(false);

  const handleMouseOver = () => {
    setShowLogoContainer(true);
  };

  const handleMouseLeave = () => {
    setShowLogoContainer(false);
  };
  const handleShowHome = () => {
    setShowHome(true);
    setShowStudentPortal(false);
    setShowLogin(false);
  };
  const handleShowStudentPortal = () => {
    setShowHome(false);
    setShowStudentPortal(true);
    setShowLogin(false);
    setShowSupervisorDashboard(false);
  };
  const handleshowLogin = () => {
    setShowHome(false);
    setShowStudentPortal(false);
    setShowLogin(true);
    setShowStudentDashboard(false);
  };
  const handleShowSuperisorPortal = () => {
    setShowSupervisorDashboard(true);
    setShowHome(false);
    setShowStudentPortal(false);
    setShowLogin(false);
    setShowStudentPortal(false);
  };
  return (
    <>
      {showStudentDashboard && (
        <div className="container h-full d-flex align-items-center justify-content-center">
          <div className="card w-75">
            <div className="card-header bg-dark">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-light text-light">
                    <h4 className="text-white">
                      <i className="fas fa-stethoscope fa-2x text-warning"></i>
                      CERTS Rotation Tracking system
                    </h4>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a
                            className="nav-link text-light"
                            href="#"
                            onClick={handleShowHome}
                          >
                            Home
                          </a>
                        </li>
                        {systemUserType === "2" ? (
                          <li className="nav-item">
                            <a
                              className="nav-link text-light"
                              href="#"
                              onClick={handleShowStudentPortal}
                            >
                              Student
                            </a>
                          </li>
                        ) : null}
                        {systemUserType === "3" ? (
                          <li className="nav-item">
                            <a
                              className="nav-link text-light"
                              href="#"
                              onClick={handleShowSuperisorPortal}
                            >
                              Supervisor
                            </a>
                          </li>
                        ) : null}
                        <li
                          className="nav-item"
                          onMouseOver={handleMouseOver}
                          onMouseLeave={handleMouseLeave}
                        >
                          <a
                            className="nav-link text-light"
                            href="#"
                            onClick={handleshowLogin}
                          >
                            <i className="fas fa-user text-warning mr-1"></i>
                            Account
                          </a>
                          {showLogoContainer && (
                            <div className="container bg-warning">
                              <ul>
                                {userName !== "" ? <li>{userName}</li> : null}
                                <li>
                                  <a
                                    className="nav-link text-dark"
                                    href="#"
                                    onClick={handleshowLogin}
                                  >
                                    {userName !== "" ? "Log out" : "Login"}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card-body">
              {showHome && (
                <div>
                  <section className="hero bg-light text-dark py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="feature">
                            <i className="fas fa-file"></i>
                            <h4>Track and Manage Rotations</h4>
                            <p>
                              Effortlessly manage and track clinical rotations
                              for healthcare education.
                            </p>
                          </div>
                          <div className="feature">
                            <i className="fas fa-calendar-check text-center"></i>
                            <h4>Schedule Rotations</h4>
                            <p>
                              Efficiently manage and schedule clinical rotations
                              for students or trainees.
                            </p>
                          </div>
                          <div className="feature">
                            <i className="fas fa-file"></i>
                            <h4>Generate Reports</h4>
                            <p>
                              Generate comprehensive reports on student
                              performance and rotation history.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                              alt="Clinical System Homepage"
                              src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                              className="img-fluid rounded"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {showStudentPortal && <StudentRegistratiion />}
              {showSupervisorDashboard && <SupervisorsPanel />}
            </div>
            <div className="card-footer bg-warning">
              <footer className="footer  py-4">
                <div className="container text-center">
                  <span>
                    &copy; 2023 Clinical Education Rotations Tracking System.
                    All rights reserved.
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}
      {showLogin && <LoginPage />}
    </>
  );
};

export default StudentDashboard;
