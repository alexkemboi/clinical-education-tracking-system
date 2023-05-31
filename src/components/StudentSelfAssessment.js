import React from "react";

function SelfAssessment() {
  return (
    <>
      <div className="row">
        <div className="col-12 m-auto">
          <form>
            <div className="card">
              <div className="card-header bg-dark text-white text-center">
                <i className="fas fa-user-md fa-3x"></i>
                <h4 className="mb-0">Rotation Area Self-Assessment</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
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
                      <label htmlFor="reportingTime">Reporting Time:</label>
                      <input
                        type="time"
                        className="form-control"
                        id="reportingTime"
                        name="reportingTime"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="timeLeft">Time Left (in minutes):</label>
                      <input
                        type="time"
                        className="form-control"
                        id="timeLeft"
                        name="timeLeft"
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
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="lessonsLearned">Lessons Learned:</label>
                      <textarea
                        className="form-control"
                        id="lessonsLearned"
                        name="lessonsLearned"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="improvements">
                        Suggestions for Improvement:
                      </label>
                      <textarea
                        className="form-control"
                        id="improvements"
                        name="improvements"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
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
                  </div>
                  <div className="col-3">
                    <div className="form-group">
                      <label htmlFor="name">Your Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-default form-control bg-dark text-white">
                      Submit Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SelfAssessment;
