import React, { useState, useEffect } from "react";
import PlaceAllStudents from "./PlaceAllStudents";
import RotationPlacement from "./RotationPlacement";
import SupervisorAssessment from "./SupervisorAssessment";
function ClinicalManagement() {
  const [showClinicalRotation, setShowClinicalRotation] = useState(false);
  const [showEvaluationAssessment, setShowEvaluationAssessment] =
    useState(true);
  const [showPlaceAllStudents, setShowPlaceAllStudents] = useState(false);
  const handleShowClinicalRotation = () => {
    setShowClinicalRotation(true);
    setShowEvaluationAssessment(false);
    setShowPlaceAllStudents(false);
  };
  const handleShowEvaluationAssessment = () => {
    setShowEvaluationAssessment(true);
    setShowClinicalRotation(false);
    setShowPlaceAllStudents(false);
  };
  const handleShowPlaceAllStudents = () => {
    setShowPlaceAllStudents(true);
    setShowClinicalRotation(false);
    setShowEvaluationAssessment(false);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0">
          <a className="navbar-brand ml-3" href="#">
            Clinicals Rotation Management
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
                  onClick={handleShowClinicalRotation}
                >
                  <i className="fas fa-stethoscope"></i>
                  Placements
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={handleShowPlaceAllStudents}
                >
                  <i className="fas fa-chart-pie"></i> All Placements
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={handleShowEvaluationAssessment}
                >
                  <i className="fas fa-chart-bar"></i> Evaluation and Assessment
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {showClinicalRotation && <RotationPlacement />}
        {showPlaceAllStudents && <PlaceAllStudents />}
        {showEvaluationAssessment && <SupervisorAssessment />}
      </div>
    </>
  );
}

export default ClinicalManagement;
