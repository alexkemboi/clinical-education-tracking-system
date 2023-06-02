import React, { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const Results = () => {
    // const studentData = [
    //   { id: 1, name: 'John', grade: 80 },
    //   { id: 2, name: 'Sarah', grade: 65 },
    //   { id: 3, name: 'Michael', grade: 95 },
    //   { id: 4, name: 'Emily', grade: 55 },
    // ];
  const [studentData,setStudentData]=useState([]);
    const getGradeStatus = (grade) => {
      const passThreshold = 60;
      return grade >= passThreshold ? (
        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
      );
    };
    useEffect(()=>{
        fetch('http://localhost:3001/results')
  .then(response => response.json())
  .then(data => {
    // Process the data received from the API
    console.log(data);
    setStudentData(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });


    });
    return (
      <div>
        <h2>Results</h2>
        <table className="table striped bordered hover">
          <thead className="thead">
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.Id}>
                <td>{student.Id}</td>
                <td>{student.firstName +" "+student.secondName}</td>
                <td>{student.grade}</td>
                <td>{getGradeStatus(student.grade)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default Results;  