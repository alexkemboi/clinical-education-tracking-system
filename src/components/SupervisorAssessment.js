import React, { useState } from "react";
function SupervisorAssessment() {
  const [successMessage, setSuccessMessage] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.currentTarget);
    const evaluationData = Object.fromEntries(formData.entries());
    console.log(evaluationData);
    // Send POST request to server
    fetch("http://localhost:3001/insertClinicalEvaluationData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evaluationData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from server (e.g., show success message)
        console.log(data);
        setSuccessMessage("Sucessfully evaluated");
        setTimeout(() => {
          setSuccessMessage("");
        }, 10000);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        setSuccessMessage("Error while evaluating");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-12 m-auto">
          <form onSubmit={handleFormSubmit}>
            <div className="card">
              <div className="card-header bg-dark text-white text-center">
                <i className="fas fa-user-tie fa-3x"></i>
                <h4 className="mb-0">Supervisor Assessment</h4>
              </div>
              <div className="card-body">
                {successMessage && (
                  <h6 className="text-success text-center">{successMessage}</h6>
                )}
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
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="rotation">Rotation Id:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="rotationId"
                        name="rotationId"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="studentName">Student Id:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="studentId"
                        name="studentId"
                        placeholder="e.g 1"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="timeIn">Time In</label>
                      <input
                        type="time"
                        className="form-control"
                        id="time_In"
                        name="timeIn"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="time_out">Time Out</label>
                      <input
                        type="time"
                        className="form-control"
                        id="timeOut"
                        name="timeOut"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="feedback">Feedback:</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    rows="2"
                    required
                  ></textarea>
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
                  <div className="col-4">
                    <div className="form-group">
                      <label htmlFor="supervisorName">Your Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="supervisorId"
                        name="supervisorId"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-dark">
                      Submit
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
export default SupervisorAssessment;
