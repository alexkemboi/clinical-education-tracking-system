import React,{useState} from "react";
import "./styles/Home.css";
import SupervisorDetails from './SupervisorDetails';
import Clinicals from "./Clinicals";
import EvaluationList from "./EvaluationsList";
import StudentsList from "./StudentsList";
function Home() {
  const [showVisual,setShowVisual]=useState(true);
  const [showStudent,setShowStudent]=useState(false);
  const [showRotation,setShowRotation]=useState(false);
  const [showEvaluations,setShowEvaluations]=useState(false);
  const [showSupervisor,setShowSupervisor]=useState(false);
  const handleShowRotation=()=>{
    setShowRotation(true);
    setShowEvaluations(false);
    setShowStudent(false);
    setShowSupervisor(false);
    setShowVisual(false);
  }
  const handleShowStudents=()=>{
    setShowRotation(false);
    setShowEvaluations(false);
    setShowStudent(true);
    setShowSupervisor(false);
    setShowVisual(false);
  }
  const handleShowSupervisors=()=>{
    setShowRotation(false);
    setShowEvaluations(false);
    setShowStudent(false);
    setShowSupervisor(true);
    setShowVisual(false);
  }
  const handleShowEvaluations=()=>{
    setShowRotation(false);
    setShowEvaluations(true);
    setShowStudent(false);
    setShowSupervisor(false);
    setShowVisual(false);
  }
  const handleShowVisual=()=>{
    setShowRotation(false);
    setShowEvaluations(true);
    setShowStudent(false);
    setShowSupervisor(false);
    setShowVisual(true);
  }
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0 P-1">
          <a className="navbar-brand p-2" href="#">
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
              <li className="nav-item" >
                <a className="nav-link" href="#" onClick={handleShowRotation}>
                  <i className="fas fa-stethoscope"></i> Clinical Rotations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowEvaluations}>
                  <i className="fas fa-chart-bar"></i> Evaluation and Assessment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowStudents}>
                  <i className="fas fa-chart-bar"></i>Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowSupervisors}>
                  <i className="fas fa-chart-bar"></i>Supervisors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowVisual}>
                  <i className="fas fa-chart-bar"></i> Data Visualizations
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {showVisual&&(<div className="row">
          <div className="col-lg-12">
            <div className="card mt-3">
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header bg-success">
                          <div className="card-title text-center">
                            <i className="fas fa-user-graduate icon fa-2x"></i>
                          </div>
                          <div className="card-title text-center">
                            <h4>Total Students</h4>
                          </div>
                        </div>
                        <div className="card-body text-center">250</div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header bg-dark">
                          <div className="card-title text-center">
                            <i className="fas fa-check icon fa-2x  text-white"></i>
                            <h4 className="text-white">Total rotation Areas</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value text-center">5</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header bg-warning">
                          <div className="card-title text-center">
                            <i className="fas fa-exclamation-circle icon fa-2x"></i>
                            <h4>Completed Rotations</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value text-center">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header bg-dark">
                          <div className="card-title text-center">
                            <i className="fas fa-user-graduate icon fa-2x  text-white"></i>
                            <h4 className="text-white">Total supervisors</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value text-center">7</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header bg-warning">
                          <div className="card-title text-center">
                            <i className="fas fa-check icon fa-2x"></i>
                            <h4>Pending Rotations</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value text-center">20</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card mt-3">
                        <div className="card-header bg-success">
                          <div className="card-title text-center">
                            <i className="fas fa-exclamation-circle icon fa-2x"></i>
                            <h4>Total Hospitals</h4>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="value text-center">5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
        {showRotation&&<Clinicals/>}
        {showStudent&&<StudentsList/>}
        {showSupervisor&&<SupervisorDetails/>}
        {showEvaluations&&<EvaluationList/>}
      </div>
    </>
  );
}
export default Home;
