import React, { useState } from "react";
function Clinicals() {
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
            <tr>
            <td>John Doe</td>
            <td>Cardiology</td>
            <td>2023-05-01</td>
            <td>2023-06-30</td>
            <td>In Progress</td>
            <td>Dr. Smith</td>
            <td>
                <button className="btn btn-primary btn-sm mr-3" onclick="editRotation(1)">Edit</button>
                <button className="btn btn-danger btn-sm" onclick="deleteRotation(1)">Delete</button>
            </td>
            </tr>
            <tr>
            <td>Jane Smith</td>
            <td>Orthopedics</td>
            <td>2023-07-01</td>
            <td>2023-08-31</td>
            <td>Completed</td>
            <td>Dr. Johnson</td>
            <td>
                <button className="btn btn-primary btn-sm mr-3" onclick="editRotation(2)">Edit</button>
                <button className="btn btn-danger btn-sm " onclick="deleteRotation(2)">Delete</button>
            </td>
            </tr>   
        </tbody>
        </table>

    </>
  );
}

export default Clinicals;
