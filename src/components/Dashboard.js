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
                                    <div className='card'><div className='card-body bg-dark'>  <h3>Clinical Education Tracking System Dashboard</h3></div></div>          
                                </div>
                          </div> 
                                  <div class="row">
                                    <div class="col-md-4">
                                      <div class="card">
                                        <div class="card-body">
                                          <h5 class="card-title">Number of Students</h5>
                                          <p class="card-text text-center"><i class="fas fa-user-graduate text-center fa-3x"></i> </p>
                                          <canvas id="students-chart">300</canvas>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="card">
                                        <div class="card-body">
                                          <h5 class="card-title">Placements by Type</h5>
                                          <p class="card-text text-center"><i class="fas fa-chart-pie  fa-3x"></i></p>
                                          <canvas id="placements-chart"></canvas>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="card">
                                        <div class="card-body">
                                          <h5 class="card-title">Success Rate</h5>
                                          <p class="card-text text-center"><i class="fas fa-chart-bar text-center fa-3x"></i></p>
                                          <canvas id="success-rate-chart"></canvas>
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