import React, { useState,useEffect } from "react";
function PlaceAllStudents(){
    const [students,setStudentsList]=useState([]);
    const [rotationAreas,setRotationAreas]=useState([]);
    const [clinicalRotations,setClinicalRoations]=useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/selectPersonalInformation')
          .then(response => response.json())
          .then(data => {
           // console.log(data);
            setStudentsList(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);


      useEffect(() => {
        fetch('http://localhost:3001/RotationAreas')
          .then(response => response.json())
          .then(data => {
           // console.log(data);
            setRotationAreas(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      useEffect(() => {
        fetch('http://localhost:3001/selectClinicalRotations')
          .then(response => response.json())
          .then(data => {
           // console.log(data);
            setClinicalRoations(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
return(
<>
               <div className="card p-3 mb-2">
                  <div className="bg-dark p-2 rounded">
                    <h4 className="text-warning ">Do you want to place all students? <button className="btn btn-sm btn-light text-dark ml-1">No</button></h4>
                  </div>
              <div className="row">                 
                  <div className="col-3 m-2">
                    <label>Select all students</label>
                    <input type="checkbox" className="m-1"/>
                  </div>
                  <div className="col-4">
                    <button className="btn btn-success form-control m-1">Place All Students</button>
                  </div>
                </div>
              </div> 
</>
);
}
export default PlaceAllStudents;