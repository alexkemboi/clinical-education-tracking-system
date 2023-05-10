import React from "react";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mt-3">
              <div className="card-body">
                <div className="container">
                  <h4>Clinical Education Tracking System</h4>
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
