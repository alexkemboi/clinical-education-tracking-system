import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10); 
  useEffect( () => {
    const fetchStudentData=async ()=>{
  await  fetch("http://localhost:3001/personal_information")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });}
      fetchStudentData();
  }, []);
  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h6>Student Listing</h6>
      <div className="row">
        <div className="col-12">
          <div className="input-group p-1">
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
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.secondName}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td>{student.address}</td>
              <td>{student.phone_number}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        studentsPerPage={studentsPerPage}
        totalStudents={students.length}
        paginate={paginate}
      />
    </div>
  );
};

export default StudentsList;
