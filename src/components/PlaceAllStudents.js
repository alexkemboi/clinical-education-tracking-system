import React, { useState, useEffect } from "react";
function PlaceAllStudents() {
  const [studentsData, setStudentsList] = useState([]);
  const [rotationAreasData, setRotationAreas] = useState([]);
  const [clinicalRotationsData, setClinicalRoations] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [rotationAreaId, setRotationAreaId] = useState("");
  const [startRotationDate, setStartRotationDate] = useState("");
  const [endRotationDate, setEndRotationDate] = useState("");
  const [message, setSuccessMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3001/selectPersonalInformation")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setStudentsList(data);
        })
        .catch((error) => {
          console.error(error);
        });
      await fetch("http://localhost:3001/selectRotationAreas")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setRotationAreas(data);
        })
        .catch((error) => {
          console.error(error);
        });
      await fetch("http://localhost:3001/clinical_rotations")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setClinicalRoations(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, []);
  function handlePlaceStudents() {
    console.log(studentsData);
    console.log(clinicalRotationsData);
    console.log(rotationAreasData);

    const remainingRotationAreas = rotationAreasData.filter((rotationArea) => {
      // Filter out rotation areas that have already been placed for any student
      return !clinicalRotationsData.some(
        (clinicalRotation) =>
          clinicalRotation.rotationAreaId === rotationArea.id
      );
    });

    for (let i = 0; i < studentsData.length; i++) {
      // Check if there are remaining rotation areas available
      if (remainingRotationAreas.length === 0) {
        console.log("No more rotation areas available for placement");
        break;
      }

      // Randomly select a rotation area from the remaining areas
      const randomIndex = Math.floor(
        Math.random() * remainingRotationAreas.length
      );
      const selectedRotationArea = remainingRotationAreas[randomIndex];

      const data = {
        studentId: studentsData[i].id,
        rotationAreaId: selectedRotationArea.id,
        startRotationDate,
        endRotationDate,
      };
      console.log(data);

      try {
        const response = fetch(
          "http://localhost:3001/insertClinicalRotationData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          console.log("Data inserted successfully");
          setSuccessMessage("Student placed successfully");
          // // // Reset the form
          // setStudentId("");
          // setRotationAreaId("");
          // setStartRotationDate("");
          // setEndRotationDate("");

          // Remove the selected rotation area from the remaining areas
          remainingRotationAreas.splice(randomIndex, 1);
        }
        setSuccessMessage("Students placed successfully");
      } catch (error) {
        setSuccessMessage("Failed to place student");
        console.log("Error:", error);
      }
    }
  }

  return (
    <>
      <div className="card p-3 mb-2">
        <div className="bg-dark p-2 rounded">
          <h6 className="text-warning ">
            This will place all the students...
          </h6>
        </div>
        <div className="row p-2">
          {message && <h6 className="text-success">{message}</h6>}
          <div className="col-4">
            <div className="form-group row">
              <label htmlFor="start-date" className="col-sm-6 col-form-label">
                Start Date
              </label>
              <br />
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="start-date"
                  name="start-date"
                  value={startRotationDate}
                  onChange={(e) => setStartRotationDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group row">
              <label htmlFor="end-date" className="col-sm-6 col-form-label">
                End Date
              </label>
              <br />
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id="end-date"
                  name="end-date"
                  value={endRotationDate}
                  onChange={(e) => setEndRotationDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn btn-success form-control m-1"
              onClick={handlePlaceStudents}
            >
              Place All Students
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PlaceAllStudents;
