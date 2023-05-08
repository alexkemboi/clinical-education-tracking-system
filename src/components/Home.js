import React from "react";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="container">
                  <h4>Clinical Education Tracking System</h4>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="visualization">
                        <div class="row">
                          <div class="col-md-3">
                            <i class="fas fa-user-graduate icon"></i>
                          </div>
                          <div class="col-md-9">
                            <h4>Total Students</h4>
                            <div class="value">250</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="visualization">
                        <div class="row">
                          <div class="col-md-3">
                            <i class="fas fa-check icon"></i>
                          </div>
                          <div class="col-md-9">
                            <h4>Completed Courses</h4>
                            <div class="value">1250</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="visualization">
                        <div class="row">
                          <div class="col-md-3">
                            <i class="fas fa-exclamation-circle icon"></i>
                          </div>
                          <div class="col-md-9">
                            <h4>Pending Courses</h4>
                            <div class="value">750</div>
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
      </div>
    </>
  );
}
export default Home;
