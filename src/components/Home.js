import React from "react";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0">
          <a className="navbar-brand" href="#">
            Clinicals Rotation Reports
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                 
                >
                  <i className="fas fa-stethoscope"></i> Clinical Rotations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                 
                >
                  <i className="fas fa-chart-bar"></i> Evaluation and Assessment
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  
                >
                  <i className="fas fa-chart-bar"></i>Students
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  
                >
                  <i className="fas fa-chart-bar"></i>Preceptors
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  
                >
                  <i className="fas fa-chart-bar"></i> Data Visualizations
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mt-3">
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-user-graduate icon"></i>
                          </div>
                          <div className="card-title">
                            <h4>Total Students</h4>
                          </div>
                        </div>
                        <div className="card-body text-center">250</div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-check icon"></i>
                            <h4>Completed Courses</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">1250</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-exclamation-circle icon"></i>
                            <h4>Pending Courses</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">750</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-user-graduate icon"></i>
                            <h4>Rotation areas</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">3</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-check icon"></i>
                            <h4>Successfull students</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">1250</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-exclamation-circle icon"></i>
                            <h4>Pending Courses</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">750</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-user-graduate icon"></i>
                            <h4>Total Students</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">250</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-check icon"></i>
                            <h4>Completed Courses</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value">1250</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header">
                          <div className="card-title">
                            <i className="fas fa-exclamation-circle icon"></i>
                          </div>
                          <h4>Pending Courses</h4>
                        </div>
                        <div className="card-body">
                          <div className="value">750</div>
                        </div>
                      </div>
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
export default Home;
