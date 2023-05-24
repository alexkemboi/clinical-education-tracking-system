import React, { useState, useEffect } from 'react';

function Clinicals() {
  const [clinicalRotations, setClinicalRotations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/clinical_rotations')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setClinicalRotations(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
          {clinicalRotations.map(item => (
            <tr key={item.id}>
              <td>{item.firstName+" "+item.secondName}</td>
              <td>{item.area_name}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td className='text-warning'>{item.status}</td>
              <td>{item.preceptor}</td>
              <td>
                <button className="btn btn-primary btn-sm mr-1">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Clinicals;
