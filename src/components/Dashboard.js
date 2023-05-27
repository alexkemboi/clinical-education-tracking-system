import React, { useState } from "react";
import "./styles/DashboardStyles.css";
import LoginPage from "../LoginPage";
import ClinicalManagement from "./ClinicalManagement";
import StudentRegistratiion from "./StudentRegistration";
import Home from "./Home";
import Clinicals from "./Clinicals";
import "bootstrap/dist/css/bootstrap.min.css";
import { userName } from "../LoginPage";

function Dashboard() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showClinicalManagement, setShowClinicalManagement] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showClinicals, setShowClinicals] = useState(true);
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
        <div className="container">
          <div className="card ">
            <div className="card-header bg-dark">
              <div className="title-bar bg-dark text-light">
                <div className="row">
                  <div className="col-6">
                    <h6>
                      {" "}
                      <i className="fas fa-stethoscope fa-2x text-warning"></i>
                      Clinical Education Rotation Tracking System
                    </h6>
                  </div>
                  <div className="col-4">
                    <div className="input-group ">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-icon"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="search-icon">
                          <i className="fas fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="user-profile text-left">
                      <i className="fas fa-user fa-2x mr-1 "></i>
                      <span className="username">{userName.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body bg-light">
              <section>
                <div className="row">
                  <div className="col-2 sidebar text-light bg-light d-none d-md-block ">
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
                        <a className="nav-link" href="#" onClick={handleLogout}>
                          <i className="fas fa-sign-out-alt mr-2"></i>Log out
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-10 working-area bg-light">
                    <div className="working-area-content">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="container-fluid  overflow-auto">
                                {showHome && <Home />}
                                {showClinicals && <Clinicals />}
                                {showStudentForm && <StudentRegistratiion />}
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
              <p className="card-text text-light text-center">
                Developped and managed by @ikonex
              </p>
            </div>
          </div>
        </div>
      )}
      {showLoginForm && <LoginPage />}
    </>
  );
}

export default Dashboard;
