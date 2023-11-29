import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { studentIdNumber } from '../LoginPage';
const Results = () => {
  const [studentData,setStudentData]=useState([]);
    const getGradeStatus = (grade) => {
      return grade == "Passed"? (
        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
      );
    };
    useEffect( ()=>{
      const fetchData=async ()=>{
       await fetch(`http://localhost:3001/results`)
  .then(response => response.json())
  .then(data => {
    // Process the data received from the API
    //console.log(data);
    setStudentData(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
      }
      fetchData();

    },[]);
    return (
      <div>
        <h5>Results</h5>
        <table className="table striped bordered hover">
          <thead className="thead">
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Total Marks</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.Id}>
                <td>{student.Id}</td>
                <td>{student.firstName +" "+student.secondName}</td>
                <td>{student.totalMarks}</td>
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