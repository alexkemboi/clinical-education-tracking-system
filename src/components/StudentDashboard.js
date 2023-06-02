import React, { useState } from "react";
import LoginPage from "../LoginPage";
import StudentRegistratiion from "./StudentRegistration";
const StudentDashboard = () => {
  const [showHome, setShowHome] = useState(true);
  const [showStudentPortal, setShowStudentPortal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showStudentDashboard, setShowStudentDashboard] = useState(true);
  const [showSupervisorDashboard, setShowSupervisorDashboard] = useState(false);
  const handleShowHome = () => {
    setShowHome(true);
    setShowStudentPortal(false);
    setShowLogin(false);
  };
  const handleShowStudentPortal = () => {
    setShowHome(false);
    setShowStudentPortal(true);
    setShowLogin(false);
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
    setShowStudentDashboard(false);
  };
  return (
    <>
      {showStudentDashboard && (
        <div className="container h-75 d-flex align-items-center justify-content-center">
          <div className="card w-75">
            <div className="card-header bg-dark">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-light text-light">
                    <h4 className="text-white">
                      <i className="fas fa-stethoscope fa-2x text-warning"></i>
                      CERTS Student Dashboard
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
                        <li className="nav-item">
                          <a
                            className="nav-link text-light"
                            href="#"
                            onClick={handleShowStudentPortal}
                          >
                            Student
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-light"
                            href="#"
                            onClick={handleShowSuperisorPortal}
                          >
                            supervisor
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-light"
                            href="#"
                            onClick={handleshowLogin}
                          >
                            Login
                          </a>
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
                            <p className="lead">
                              Effortlessly manage and track clinical rotations
                              for healthcare education.
                            </p>
                          </div>
                          <div className="feature">
                            <i className="fas fa-calendar-check text-center"></i>
                            <h4>Manage Rotations</h4>
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

                  {/* <section className="features py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="feature">
                            <i className="bi bi-calendar-check"></i>
                            <h4>Manage Rotations</h4>
                            <p>
                              Efficiently manage and schedule clinical rotations
                              for students or trainees.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="feature">
                            <i className="bi bi-person-lines-fill"></i>
                            <h4>Track Attendance</h4>
                            <p>
                              Track attendance and hours spent by students
                              during their rotations.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="feature">
                            <i className="bi bi-file-earmark-text"></i>
                            <h4>Generate Reports</h4>
                            <p>
                              Generate comprehensive reports on student
                              performance and rotation history.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}
                </div>
              )}
              {/* {<LoginPage />} */}
              {showStudentPortal && <StudentRegistratiion />}
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
