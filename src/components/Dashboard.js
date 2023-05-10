import React, { useState } from "react";
import "./styles/DashboardStyles.css";
import LoginPage from "../LoginPage";
import ClinicalManagement from "./ClinicalManagement";
import StudentRegistratiion from "./StudentRegistration";
import Home from "./Home";

function Dashboard() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showClinicalManagement, setShowClinicalManagement] = useState(false);
  const [showHome, setShowHome] = useState(true);
  function handleLogout() {
    setShowLoginForm(true);
    setShowDashboard(false);
  }
  function handleShowStudentForm() {
    setShowStudentForm(true);
    setShowClinicalManagement(false);
    setShowLoginForm(false);
    setShowHome(false);
  }
  function handleClinicalManagement() {
    setShowClinicalManagement(true);
    setShowLoginForm(false);
    setShowStudentForm(false);
    setShowHome(false);
  }
  function handleHome() {
    setShowClinicalManagement(false);
    setShowLoginForm(false);
    setShowStudentForm(false);
    setShowHome(true);
  }

  return (
    <>
      {showDashboard && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card ">
                <div className="card-header bg-secondary">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-title">
                        <div className="row">
                          <div className="col-lg-10">
                            <h4 className="text-light text-center">
                              <i className="fas fa-stethoscope fa-2x text-warning"></i>
                              Clinical Education Rotation System
                            </h4>
                          </div>
                          <div className="col-lg-2">
                            <div className="row">
                              <div className="col-lg-3">
                                <div className="account mr-0">
                                  <i className="fas fa-user text-center"></i>
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <h5>Full Name</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-dark">
                  <section>
                    <div className="row">
                      <div className="col-2 sidebar text-light bg-dark">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#"
                              onClick={handleHome}
                            >
                              <i className="fas fa-home mr-2"></i>Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#"
                              onClick={handleShowStudentForm}
                              className="nav-link"
                            >
                              <i className="fas fa-user-graduate mr-2"></i>
                              Student
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#"
                              onClick={handleClinicalManagement}
                            >
                              <i className="fas fa-notes-medical mr-2"></i>
                              Clinicals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <i className="fas fa-file-alt mr-2"></i>Reports
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <i className="fas fa-cog mr-2"></i>Settings
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#"
                              onClick={handleLogout}
                            >
                              <i className="fas fa-sign-out-alt mr-2"></i>Log
                              out
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-10 working-area bg-dark">
                        <div className="working-area-content">
                          <div className="card">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="container-fluid vh-100 overflow-auto">
                                    {showHome && <Home />}
                                    {showStudentForm && (
                                      <StudentRegistratiion />
                                    )}
                                    {showClinicalManagement && (
                                      <ClinicalManagement />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="card-footer bg-secondary">
                  <p className="card-text">Developped and managed by @ikonex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showLoginForm && <LoginPage />}
    </>
  );
}

export default Dashboard;
