import React, { useState } from "react";
function ClinicalManagement() {
  const [showClinicalRotation, setShowClinicalRotation] = useState(true);
  const [showEvaluationAssessment, setShowEvaluationAssessment] =
    useState(false);
  const handleShowClinicalRotation = () => {
    setShowClinicalRotation(true);
    setShowEvaluationAssessment(false);
  };
  const handleShowEvaluationAssessment = () => {
    setShowClinicalRotation(false);
    setShowEvaluationAssessment(true);
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
                  <i className="fas fa-stethoscope"></i> Clinical Rotation Placement
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

        {showClinicalRotation && (
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h6>
                <i className="fas fa-clipboard-list"></i> Clinical Rotation
                placement
              </h6>
            </div>
            <div className="card-body">
            <form>
                <div className="form-group row">
                <label htmlFor="student_name" className="col-sm-2 col-form-label">Student Name</label>
                  <div className="col-sm-10">
                    <select className="form-control mb-2" id="student_name" name="student_name">
                      <option value="student_name">Student One</option>
                    </select>
                  </div>
                  
                  <label htmlFor="rotation-type" className="col-sm-2 col-form-label">Rotation Name</label>
                  <div className="col-sm-10">
                    <select className="form-control" id="rotation-type" name="rotation-type">
                      <option value="internal-medicine">Internal Medicine</option>
                      <option value="pediatrics">Pediatrics</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="start-date" className="col-sm-2 col-form-label">Start Date</label>
                  <div className="col-sm-10">
                    <input type="date" className="form-control" id="start-date" name="start-date" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="end-date" className="col-sm-2 col-form-label">End Date</label>
                  <div className="col-sm-10">
                    <input type="date" className="form-control" id="end-date" name="end-date" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-dark">
                      <i className="fas fa-save"></i> Submit Placement
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {showEvaluationAssessment && (
          <div>
            <div className="card">
              <div className="card-header bg-dark text-white">
                {" "}
                <h4>
                  {" "}
                  <i className="fas fa-user-md"></i>Evaluation and Assessment Form
                </h4>
              </div>
              <div className="card-body">
                <form>
                <div className="form-group">
                    <label htmlFor="student">
                      Select student <i className="fas fa-asterisk text-danger"></i>
                    </label>
                    <select className="form-control" id="student" required>
                      <option value="">Select student </option>
                      <option value="">
                        ALEX KEMBOI
                      </option>
                      <option value="">
                        KAMALA JEROP</option>
                      <option value="">
                      KEN KEMBOI
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="rotation">
                      Rotation Area <i className="fas fa-asterisk text-danger"></i>
                    </label>
                    <select className="form-control" id="rotation" required>
                      <option value="">Select Rotation Area</option>
                      <option value="Internal Medicine">
                        Internal Medicine
                      </option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Obstetrics and Gynecology">
                        Obstetrics and Gynecology
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="objective">
                      Objective <i className="fas fa-asterisk text-danger"></i>
                    </label>
                    <select className="form-control" id="objective" required>
                      <option value="">Select Objective</option>
                      <option value="Develop an understanding of common medical conditions such as hypertension, diabetes, and COPD">
                        Develop an understanding of common medical conditions
                        such as hypertension, diabetes, and COPD
                      </option>
                      <option value="Learn to manage acute medical conditions in hospitalized patients">
                        Learn to manage acute medical conditions in hospitalized
                        patients
                      </option>
                      <option value="Learn to interpret laboratory results and diagnostic imaging studies">
                        Learn to interpret laboratory results and diagnostic
                        imaging studies
                      </option>
                      <option value="Develop an understanding of child development from infancy to adolescence">
                        Develop an understanding of child development from
                        infancy to adolescence
                      </option>
                      <option value="Learn to manage common pediatric conditions such as asthma, otitis media, and gastroenteritis">
                        Learn to manage common pediatric conditions such as
                        asthma, otitis media, and gastroenteritis
                      </option>
                      <option value="Develop skills in communicating with children and families">
                        Develop skills in communicating with children and
                        families
                      </option>
                      <option value="Develop an understanding of female reproductive anatomy and physiology">
                        Develop an understanding of female reproductive anatomy
                        and physiology
                      </option>
                      <option value="Learn to manage normal and high-risk pregnancies">
                        Learn to manage normal and high-risk pregnancies
                      </option>
                      <option value="Develop skills in conducting pelvic exams and pap smears">
                        Develop skills in conducting pelvic exams and pap smears
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="performance-rating">
                      Performance Rating{" "}
                      <i className="fas fa-asterisk text-danger"></i>
                    </label>
                    <select
                      className="form-control"
                      id="performance-rating"
                      required
                    >
                      <option value="">Select Performance Rating</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Satisfactory">Satisfactory</option>
                      <option value="Needs Improvement">
                        Needs Improvement
                      </option>
                      <option value="Unsatisfactory">Unsatisfactory</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="feedback">
                      Feedback <i className="fas fa-asterisk text-danger"></i>
                    </label>
                    <textarea
                      className="form-control"
                      id="feedback"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ClinicalManagement;
