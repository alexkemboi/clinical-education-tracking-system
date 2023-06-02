import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [evaluationsPerPage] = useState(10);

  useEffect(() => {
    fetch("http://localhost:3001/evaluations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvaluations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Get current evaluations
  const indexOfLastEvaluation = currentPage * evaluationsPerPage;
  const indexOfFirstEvaluation = indexOfLastEvaluation - evaluationsPerPage;
  const currentEvaluations = evaluations.slice(
    indexOfFirstEvaluation,
    indexOfLastEvaluation
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h6>Evaluations</h6>
      <div className="row">
        <div className="col-12">
          <div className="input-group p-1">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Search by id"
              aria-label="Search"
              aria-describedby="search-icon"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="search-icon">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              {/* <th>Evaluation ID</th>
              <th>Date</th> */}
              <th>Rotation ID</th>
              <th>Student ID</th>
              <th>Supervisor ID</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Feedback</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {currentEvaluations.map((evaluation) => (
              <tr key={evaluation.evaluationId}>
                {/* <td>{evaluation.evaluationId}</td>
                <td>{evaluation.date}</td> */}
                <td>{evaluation.rotationId}</td>
                <td>{evaluation.studentId}</td>
                <td>{evaluation.supervisorId}</td>
                <td>{evaluation.timeIn}</td>
                <td>{evaluation.timeOut}</td>
                <td>{evaluation.feedback}</td>
                <td>{evaluation.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        evaluationsPerPage={evaluationsPerPage}
        totalEvaluations={evaluations.length}
        paginate={paginate}
      />
    </div>
  );
};

export default EvaluationList;
