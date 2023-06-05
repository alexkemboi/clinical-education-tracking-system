import React, { useState, useEffect } from "react";
import { studentIdNumber } from "../LoginPage";
function Clinicals() {
  const [clinicalRotations, setClinicalRotations] = useState([]);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  useEffect(() => {
    fetch(`http://localhost:3001/clinical_rotations/${studentIdNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClinicalRotations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // Calculate the index range for the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = clinicalRotations.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const handleDelete = (id) => {
    // Filter out the row with the given id and update the state
    const updatedRotations = clinicalRotations.filter((item) => item.id !== id);
    setClinicalRotations(updatedRotations);
    //console.log(clinicalRotations);
    // Send delete request to the backend
    fetch(`http://localhost:3001/deleteRotations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data deleted successfully");
        } else {
          throw new Error("Failed to delete data");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error or display error message
      });
  };
  const renderClinicalRotations = () => {
    return currentRecords.map((item) => (
      <tr key={item.id}>
        <td>{item.firstName + " " + item.secondName}</td>
        <td>{item.area_name}</td>
        <td>{formatDate(item.start_date)}</td>
        <td>{formatDate(item.end_date)}</td>
        <td className="text-warning">{item.status}</td>
        <td>{item.supervisor_name}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };
  function handleSearch(id) {
    try {
      fetch(`http://localhost:3001/searchClinicalRotations/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setClinicalRotations(data);
          data.legth == 0
            ? setMessage("No similar record found")
            : setMessage(`${data.length} records found`);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-12">
          <div className=" rounded mt-1">
            <h6 className="text-dark">Clinical rotations</h6>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Search by id"
              aria-label="Search"
              aria-describedby="search-icon"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="search-icon">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {message && <h6 className="text-success">{message}</h6>}
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Rotation Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Supervisor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderClinicalRotations()}</tbody>
        </table>

        {/* Pagination */}
        <nav>
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(clinicalRotations.length / recordsPerPage),
            }).map((_, index) => (
              <li
                key={index + 1}
                className={`page-item${
                  currentPage === index + 1 ? " active" : ""
                } text-center`}
                onClick={() => setCurrentPage(index + 1)}
              >
                <button className="page-link text-center btn-sm bg-warning text-dark m-1 border-warning">
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
  function formatDate(dateString) {
    const dateObj = new Date(dateString);
    const formattedDate = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return formattedDate;
  }
}

export default Clinicals;
