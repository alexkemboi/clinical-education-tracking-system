import React from "react";
function SupervisorAssessment() {
  return (
    <>
      <div className="row">
        <div className="col-4 m-auto">
          <form className="container">
            <div className="card">
              <div className="card-header bg-dark text-white text-center">
                <i className="fas fa-user-tie fa-3x"></i>
                <h4 className="mb-0">Supervisor Assessment</h4>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rotation">Rotation Area:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="rotation"
                    name="rotation"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="studentName">Student Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentName"
                    name="studentName"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="feedback">Feedback:</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Rating (1-10):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rating"
                    name="rating"
                    min="1"
                    max="10"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="supervisorName">Your Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="supervisorName"
                    name="supervisorName"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                 // onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SupervisorAssessment;
