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
          <a className="navbar-brand" href="#">
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
                <div className="form-group">
                  <div className="form-group">
                    <label htmlFor="rotation-type">
                      <i className="fas fa-check-double"></i> Rotation Type:
                    </label>
                    <select
                      className="form-control"
                      id="rotation-type"
                      name="rotation-type"
                    >
                      <label htmlFor="rotation-area">Rotation Area:</label>
                      <option value="internal-medicine">
                        Internal Medicine
                      </option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="ob-gyn">Obstetrics and Gynecology</option>
                      <option value="surgery">Surgery</option>
                      <option value="psychiatry">Psychiatry</option>
                      <option value="emergency-medicine">
                        Emergency Medicine
                      </option>
                      <option value="family-medicine">Family Medicine</option>
                      <option value="neurology">Neurology</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="oncology">Oncology</option>
                      <option value="radiology">Radiology</option>
                      <option value="infectious-diseases">
                        Infectious Diseases
                      </option>
                      <option value="geriatrics">Geriatrics</option>
                      <option value="endocrinology">Endocrinology</option>
                      <option value="pulmonology">Pulmonology</option>
                      <option value="nephrology">Nephrology</option>
                      <option value="hematology-oncology">
                        Hematology/Oncology
                      </option>
                      <option value="dermatology">Dermatology</option>
                      <option value="ophthalmology">Ophthalmology</option>
                      <option value="otolaryngology">Otolaryngology</option>
                      <option value="Inpatient">Inpatient</option>
                      <option value="Outpatient">Outpatient</option>
                      <option value="Specialty">Specialty</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="start-date">
                      <i className="fas fa-calendar-alt"></i> Start Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="start-date"
                      name="start-date"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="end-date">
                      <i className="fas fa-calendar-alt"></i> End Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="end-date"
                      name="end-date"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">
                      <i className="fas fa-map-marker-alt"></i> Location:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preceptor">
                      <i className="fas fa-user"></i> Preceptor:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="preceptor"
                      name="preceptor"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="preceptor-title">
                      <i className="fas fa-user-tie"></i> Preceptor Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="preceptor-title"
                      name="preceptor-title"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="preceptor-email">
                      <i className="fas fa-envelope"></i> Preceptor Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="preceptor-email"
                      name="preceptor-email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">
                      <i className="fas fa-notes-medical"></i> Notes:
                    </label>
                    <textarea
                      className="form-control"
                      id="notes"
                      name="notes"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-dark">
                  <i className="fas fa-save"></i> Submit Request
                </button>
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
