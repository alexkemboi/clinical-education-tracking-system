import React, { useState } from "react";
import "./styles/Home.css";
import SupervisorDetails from "./SupervisorDetails";
import Clinicals from "./Clinicals";
import EvaluationList from "./EvaluationsList";
import StudentsList from "./StudentsList";
function Home() {
  const [showVisual, setShowVisual] = useState(true);
  const [showStudent, setShowStudent] = useState(false);
  const [showRotation, setShowRotation] = useState(false);
  const [showEvaluations, setShowEvaluations] = useState(false);
  const [showSupervisor, setShowSupervisor] = useState(false);
  const handleShowRotation = () => {
    setShowRotation(true);
    setShowEvaluations(false);
    setShowStudent(false);
    setShowSupervisor(false);
    setShowVisual(false);
  };
  const handleShowStudents = () => {
    setShowRotation(false);
    setShowEvaluations(false);
    setShowStudent(true);
    setShowSupervisor(false);
    setShowVisual(false);
  };
  const handleShowSupervisors = () => {
    setShowRotation(false);
    setShowEvaluations(false);
    setShowStudent(false);
    setShowSupervisor(true);
    setShowVisual(false);
  };
  const handleShowEvaluations = () => {
    setShowRotation(false);
    setShowEvaluations(true);
    setShowStudent(false);
    setShowSupervisor(false);
    setShowVisual(false);
  };
  const handleShowVisual = () => {
    setShowRotation(false);
    setShowEvaluations(false);
    setShowStudent(false);
    setShowSupervisor(false);
    setShowVisual(true);
  };
  const [additionalInfoCount, setAdditionalInfoCount] = useState('');
  const [clinicalRotationsCount, setClinicalRotationsCount] = useState('');
  const [educationalInfoCount, setEducationalInfoCount] = useState('');
  const [emergencyInfoCount, setEmergencyInfoCount] = useState('');
  const [evaluationCount, setEvaluationCount] = useState('');
  const [logTableCount, setLogTableCount] = useState('');
  const [personalInfoCount, setPersonalInfoCount] = useState('');
  const [rotationAreasCount, setRotationAreasCount] = useState('');
  const [rotationAreaObjectivesCount, setRotationAreaObjectivesCount] = useState('');
  const [supervisorsCount, setSupervisorsCount] = useState('');
  const [usersCount, setUsersCount] = useState('');

  // Function to fetch the data from the API
async function fetchData() {
  try {
    const response = await fetch('http://localhost:3001/count');
    if (!response.ok) {
      throw new Error('Error fetching the data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to assign the results to variables
async function assignVariables() {
  try {
    const data = await fetchData();    
    // Assign each result to a variable
    setAdditionalInfoCount(data.find((table) => table.table_name === 'additional_information').table_rows);
    setClinicalRotationsCount(data.find((table) => table.table_name === 'clinical_rotations').table_rows);
    setEducationalInfoCount(data.find((table) => table.table_name === 'educational_info').table_rows);
    setEmergencyInfoCount(data.find((table) => table.table_name === 'emergency_info').table_rows);
    setEvaluationCount(data.find((table) => table.table_name === 'evaluation').table_rows);
    setLogTableCount(data.find((table) => table.table_name === 'logtable').table_rows);
    setPersonalInfoCount(data.find((table) => table.table_name === 'personal_information').table_rows);
    setRotationAreasCount(data.find((table) => table.table_name === 'rotation_areas').table_rows);
    setRotationAreaObjectivesCount(data.find((table) => table.table_name === 'rotation_area_objectives').table_rows);
    setSupervisorsCount(data.find((table) => table.table_name === 'supervisors').table_rows);
    setUsersCount(data.find((table) => table.table_name === 'users').table_rows);
  
    // // Print the variables
    // console.log('Additional Information Count:', additionalInfoCount);
    // console.log('Clinical Rotations Count:', clinicalRotationsCount);
    // console.log('Educational Info Count:', educationalInfoCount);
    // console.log('Emergency Info Count:', emergencyInfoCount);
    // console.log('Evaluation Count:', evaluationCount);
    // console.log('Log Table Count:', logTableCount);
    // console.log('Personal Information Count:', personalInfoCount);
    // console.log('Rotation Areas Count:', rotationAreasCount);
    // console.log('Rotation Area Objectives Count:', rotationAreaObjectivesCount);
    // console.log('Supervisors Count:', supervisorsCount);
    // console.log('Users Count:', usersCount);

  } catch (error) {
    console.error(error);
  }
}

// Call the function to assign the variables
assignVariables();

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
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowRotation}>
                  <i className="fas fa-stethoscope"></i> Clinical Rotations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={handleShowEvaluations}
                >
                  <i className="fas fa-chart-bar"></i> Evaluation and Assessment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleShowStudents}>
                  <i className="fas fa-chart-bar"></i>Students
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={handleShowSupervisors}
                >
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
        {showVisual && (
          <div className="row">
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
                              <h4 className="value text-center fw-bold fs-3">Total Students</h4>
                            </div>
                          </div>
                          <div className="card-body text-center value fw-bold fs-3">{personalInfoCount}20</div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-header bg-warning">
                            <div className="card-title text-center">
                              <i className="fas fa-check icon fa-2x  text-white"></i>
                              <h4 className="text-white">
                                Total rotation Areas
                              </h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="value text-center fw-bold fs-3">{rotationAreasCount}8</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-header bg-secondary">
                            <div className="card-title text-center">
                              <i className="fas fa-exclamation-circle icon fa-2x"></i>
                              <h4>Completed Rotations</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="value text-center fw-bold fs-3">{clinicalRotationsCount}2</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-header bg-warning">
                            <div className="card-title text-center">
                              <i className="fas fa-user-graduate icon fa-2x  text-white"></i>
                              <h4 className="text-white">Total supervisors</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="value text-center fw-bold fs-3">{supervisorsCount}10</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-header bg-secondary">
                            <div className="card-title text-center">
                              <i className="fas fa-calendar-alt icon fa-2x"></i>
                              <h4>Pending Rotations</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="value text-center fw-bold fs-3">7</div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="card mt-3">
                          <div className="card-header bg-success">
                            <div className="card-title text-center">
                              <i className="fas fa-hospital icon fa-2x"></i>
                              <h4>Total Users</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="value text-center fw-bold fs-3">{usersCount}5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showRotation && <Clinicals />}
        {showStudent && <StudentsList />}
        {showSupervisor && <SupervisorDetails />}
        {showEvaluations && <EvaluationList />}
      </div>
    </>
  );
}
export default Home;
