import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SupervisorDetails = () => {
  const [supervisors, setSupervisors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/supervisors")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSupervisors(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container">
      <h6>Supervisors Table</h6>
      <div className="row">
        <div className="col-12">
          <div className="input-group p-1">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Search by rotation id"
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
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Rotation ID</th>
          </tr>
        </thead>
        <tbody>
          {supervisors.map((supervisor) => (
            <tr key={supervisor.id}>
              <td>{supervisor.id}</td>
              <td>{supervisor.name}</td>
              <td>{supervisor.email}</td>
              <td>{supervisor.phone}</td>
              <td>{supervisor.address}</td>
              <td>{supervisor.rotationId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupervisorDetails;
