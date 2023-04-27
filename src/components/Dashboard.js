import './styles/DashboardStyles.css'
function Dashboard() {
  return (
    <>       
            <div className="working-area row bg-color">
              <div className="col-2 sidebar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="fas fa-tachometer-alt mr-2"></i>Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-users mr-2"></i>Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-file-alt mr-2"></i>Reports
                    </a>
                  </li>
                </ul>
              </div>

          
              <div className="col-10 working-area bg-tertiary">
                <div className="working-area-content">
                  <h1>Welcome to the Dashboard</h1>
                  <p>This is where you can see all the important information at a glance.</p>
                </div>
              </div>
            </div>
          
  </>
  );
}

export default Dashboard;