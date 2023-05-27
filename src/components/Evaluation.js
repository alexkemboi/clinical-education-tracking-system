import React, { useState } from "react";
function Evaluation() {
  return (
    <>
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
                  <option value="">ALEX KEMBOI</option>
                  <option value="">KAMALA JEROP</option>
                  <option value="">KEN KEMBOI</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="rotation">
                  Rotation Area <i className="fas fa-asterisk text-danger"></i>
                </label>
                <select className="form-control" id="rotation" required>
                  <option value="">Select Rotation Area</option>
                  <option value="Internal Medicine">Internal Medicine</option>
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
                    Develop an understanding of common medical conditions such
                    as hypertension, diabetes, and COPD
                  </option>
                  <option value="Learn to manage acute medical conditions in hospitalized patients">
                    Learn to manage acute medical conditions in hospitalized
                    patients
                  </option>
                  <option value="Learn to interpret laboratory results and diagnostic imaging studies">
                    Learn to interpret laboratory results and diagnostic imaging
                    studies
                  </option>
                  <option value="Develop an understanding of child development from infancy to adolescence">
                    Develop an understanding of child development from infancy
                    to adolescence
                  </option>
                  <option value="Learn to manage common pediatric conditions such as asthma, otitis media, and gastroenteritis">
                    Learn to manage common pediatric conditions such as asthma,
                    otitis media, and gastroenteritis
                  </option>
                  <option value="Develop skills in communicating with children and families">
                    Develop skills in communicating with children and families
                  </option>
                  <option value="Develop an understanding of female reproductive anatomy and physiology">
                    Develop an understanding of female reproductive anatomy and
                    physiology
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
                  <option value="Needs Improvement">Needs Improvement</option>
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
    </>
  );
}
export default Evaluation;
