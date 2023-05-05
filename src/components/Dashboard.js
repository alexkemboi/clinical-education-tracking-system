<<<<<<< HEAD
import React, { useState } from "react";
import ApexCharts from "apexcharts";
//import "./styles/DashboardStyles.css";
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
      {" "}
      {showDashboard && (
        <div className="card h-100 w-100">
          <div className="card-header bg-dark">
            <div className="row  text-centre ">
              <h3 className="text-centre m-auto text-light">
                Clinical Rotation Request Form
              </h3>
            </div>
          </div>
          <div className="card-body">
            <section>
              <div className="row">
                <div className="col-2 sidebar ml-0 bg-dark text-light h-100 w-25">
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

                <div className="col-10 working-area mr-0  bg-light h-100 m-25">
                  <div className="working-area-content">
                    {showStudentForm && <StudentRegistratiion />}
                    {showClinicalManagement && <ClinicalManagement />}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="card-footer bg-dark p-10"></div>
        </div>
      )}
      {showLoginForm && <LoginPage />}
    </>
  );
}

export default Dashboard;
=======
import React from 'react';
import ApexCharts from 'apexcharts';
import './styles/DashboardStyles.css';

function Dashboard() {
  var options = {
    series: [{
      name: "Success",
      data: [80]
    },
    {
      name: "Failure",
      data: [20]
    }],
    chart: {
      height: 350,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ['Success Rate'],
    },
    legend: {
      position: 'top',
    },
    fill: {
      opacity: 1
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  return (
    <>       
            <div className="row">            
              <div className="col-2 sidebar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="fas fa-home mr-2"></i>Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-user-graduate mr-2"></i>Student
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
                </ul>
              </div>

          
              <div className="col-10 working-area">
                <div className="working-area-content">                        
                          <div class="container">
                          <div className='row'>
                                <div className='col-12'>
                                    <div className='card'><div className='card-body bg-dark'>  <h3 class="text-light">Clinical Education Tracking System Dashboard</h3></div></div>          
                                </div>
                          </div> 
                                  <div class="row">
                                    <div class="col-md-4">
                                      <div class="card">
                                        <div class="card-header text-center">
                                          <i class="fas fa-user-graduate fa-3x"></i> 
                                          <h5 class="card-title">Number of Students</h5>
                                        </div>
                                        <div class="card-body">
                                          <p class="card-text text-center">300</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="card">
                                      <div class="card-header text-center">
                                          <i class="fas fa-chart-bar fa-3x"></i> 
                                          <h5 class="card-title">placement types</h5>
                                        </div>
                                        <div class="card-body">
                                          <p class="card-text text-center">500</p>                                          
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="card">
                                      <div class="card-header text-center">
                                          <i class="fas fa-user-graduate fa-3x"></i> 
                                          <h5 class="card-title">Success rate</h5>
                                        </div>
                                        <div class="card-body">
                                          <p class="card-text text-center">132</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                </div>
              </div>
            </div>
          
  </>
  );
}

export default Dashboard;
>>>>>>> origin/main
