import React, { useState, useEffect } from "react";

function Clinicals() {
  const [clinicalRotations, setClinicalRotations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/clinical_rotations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClinicalRotations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
  return (
    <>
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
        <tbody>
          {clinicalRotations.map((item) => (
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
          ))}
        </tbody>
      </table>
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
