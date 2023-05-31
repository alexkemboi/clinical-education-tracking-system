import React, { useState, useEffect } from "react";
function Search(id) {
  const [clinicalRotationsData, setClinicalRotationsData] = useState("");

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
          {clinicalRotationsData.map((item) => (
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
export default Search;
export { handleDataSearch };
