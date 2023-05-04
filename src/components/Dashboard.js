import React,{useState} from 'react';
import ApexCharts from 'apexcharts';
import './styles/DashboardStyles.css';
import LoginPage from '../LoginPage';
import ClinicalManagement from './ClinicalManagement';
import StudentRegistratiion from './StudentRegistration';

function Dashboard() {
  const [showLoginForm,setShowLoginForm]=useState(false);
  const [showDashboard,setShowDashboard]=useState(true);
  const [showStudentForm,setShowStudentForm]=useState(false);
  function handleLogout(){
      setShowLoginForm(true);
      setShowDashboard(false);
  }
  function handleShowStudentForm(){
    setShowStudentForm(true);
  }
  return (
    <>     {  showDashboard && <section>
            <div className="row">            
              <div className="col-2 sidebar">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="fas fa-home mr-2"></i>Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <button onClick={handleShowStudentForm} className='btn btn-dark'>
                      <i className="fas fa-user-graduate mr-2"></i>Student 
                    </button>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
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
                    <button className="btn btn-dark"  onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt mr-2"></i>Log out 
                    </button>
                  </li>
                </ul>
              </div>

          
              <div className="col-10 working-area">
                <div className="working-area-content">                        
                          {showStudentForm && <StudentRegistratiion/>}
                </div>
              </div>
            </div>
            </section>}
         {showLoginForm && <LoginPage/>} 
  </>
  );
}

export default Dashboard;