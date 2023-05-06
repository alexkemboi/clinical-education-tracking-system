import React, { useState } from "react";
import "./styles/DashboardStyles.css";
import LoginPage from "../LoginPage";
import ClinicalManagement from "./ClinicalManagement";
import StudentRegistratiion from "./StudentRegistration";

function Dashboard() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showClinicalManagement, setShowClinicalManagement] = useState(false);
  function handleLogout() {
    setShowLoginForm(true);
    setShowDashboard(false);
  }
  function handleShowStudentForm() {
    setShowStudentForm(true);
  }
  function handleClinicalManagement() {
    setShowClinicalManagement(true);
    setShowLoginForm(false);
    setShowStudentForm(false);
  }
  return (
    <>
      {showDashboard && (
        <div className="card ">
          <div className="card-header bg-light text-center text-dark">
            <div className="row  text-center ">
              <div className="card-title">
                <span>
                  <h4 className="m-auto text-dark text-center">
                    <i className="fas fa-hospital fa-2x text-warning"></i>
                    Clinical Rotation Request Form
                  </h4>
                </span>
              </div>
            </div>
          </div>
          <div className="card-body bg-dark">
            <section>
              <div className="row">
                <div className="col-2 sidebar text-light bg-dark">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <i className="fas fa-home mr-2"></i>Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        onClick={handleShowStudentForm}
                        className="nav-link"
                      >
                        <i className="fas fa-user-graduate mr-2"></i>Student
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={handleClinicalManagement}
                      >
                        <i className="fas fa-notes-medical mr-2"></i>Clinicals
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
                      <a className="nav-link" href="#" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt mr-2"></i>Log out
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-10 working-area bg-dark">
                  <div className="working-area-content">
                    {showStudentForm && <StudentRegistratiion />}
                    {showClinicalManagement && <ClinicalManagement />}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="card-footer bg-dark h-200"></div>
        </div>
      )}
      {showLoginForm && <LoginPage />}
    </>
  );
}

export default Dashboard;
