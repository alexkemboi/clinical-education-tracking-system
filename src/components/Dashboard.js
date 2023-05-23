import React, { useState } from "react";
import "./styles/DashboardStyles.css";
import LoginPage from "../LoginPage";
import ClinicalManagement from "./ClinicalManagement";
import StudentRegistratiion from "./StudentRegistration";
import Home from "./Home";
import Clinicals from "./Clinicals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Dashboard() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showClinicalManagement, setShowClinicalManagement] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showClinicals,setShowClinicals]=useState(true);
  function handleLogout() {
    setShowLoginForm(true);
    setShowDashboard(false);
    setShowClinicals(false);
  }
  function handleShowStudentForm() {
    setShowStudentForm(true);
    setShowClinicalManagement(false);
    setShowLoginForm(false);
    setShowHome(false);
    setShowClinicals(false);
  }
  function handleClinicalManagement() {
    setShowClinicalManagement(true);
    setShowLoginForm(false);
    setShowStudentForm(false);
    setShowHome(false);
    setShowClinicals(false);
  }
  function handleHome() {
    setShowClinicalManagement(false);
    setShowLoginForm(false);
    setShowStudentForm(false);
    setShowHome(true);
    setShowClinicals(false);
  }
  function handleClinicals() {
    setShowClinicalManagement(false);
    setShowLoginForm(false);
    setShowStudentForm(false);
    setShowClinicals(true);
    setShowHome(false);
  }


  return (
    <>
      {showDashboard && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card ">
              <div className="card-header bg-dark">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card-title">
                      <div class="title-bar bg-dark text-light">
                            <div class="container">
                              <div class="row">
                                <div class="col-lg-6">
                               
                                  <h4> <i className="fas fa-stethoscope fa-2x text-secondary"></i>Clinical Education Rotation Tracking System</h4>
                                </div>
                                <div class="col-lg-6 text-right">
                                  <div class="user-profile">
                                    <i class="fas fa-user fa-2x m-3"></i>
                                    <span class="username">John Doe</span>
                                  </div>
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
                      <div className="col-2 sidebar text-light bg-dark d-none d-md-block ">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#"
                              onClick={handleClinicals}
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
                            <a className="nav-link" href="#" onClick={handleHome}>
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
                                    {showClinicals && <Clinicals/>}
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
                <div className="card-footer bg-dark">
                  <p className="card-text text-light text-center">Developped and managed by @ikonex</p>
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
