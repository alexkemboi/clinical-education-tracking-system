import React, { useState, useEffect } from "react";
function RotationPlacement() {
  const [successMessage, setSuccessMessage] = useState("");
  const [personalInformation, setPersonalInformation] = useState([]);
  const [rotationAreas, setRotationAreas] = useState([]);
  const [studentId, setStudentId] = useState("11");
  const [rotationAreaId, setRotationAreaId] = useState("5");
  const [startRotationDate, setStartRotationDate] = useState("");
  const [endRotationDate, setEndRotationDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const personalInfoResponse = await fetch(
          "http://localhost:3001/selectPersonalInformation"
        );
        const personalInfoData = await personalInfoResponse.json();
        setPersonalInformation(personalInfoData);
      } catch (error) {
        console.error(error);
      }

      try {
        const rotationAreasResponse = await fetch(
          "http://localhost:3001/selectRotationAreas"
        );
        const rotationAreasData = await rotationAreasResponse.json();
        setRotationAreas(rotationAreasData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
 
  const handleRotationPlacementSubmit = async (e) => {
    let studentPhone='';
    let studentFirstName='';
    let studentRotationName='';
    let location='';
    e.preventDefault();  
;
    for(let i=0;i<personalInformation.length;i++){
      if(personalInformation[i].id==studentId){
      studentPhone=personalInformation[i].phone_number;
      studentFirstName=personalInformation[i].firstName; 
        
      }
    }
    for(let i=0;i<rotationAreas.length;i++){
      if(rotationAreas[i].id==rotationAreaId){
        studentRotationName=rotationAreas[i].area_name;
        location=rotationAreas[i].location;
      }
    }
    console.log(studentId+" "+rotationAreaId)
    const data = {
      studentId,
      rotationAreaId,
      startRotationDate,
      endRotationDate,
    };
    try {
      const response = await fetch(
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

        // // Reset the form
        setStudentId("");
        setRotationAreaId("");
        setStartRotationDate("");
        setEndRotationDate("");
      } else {
        console.log("Failed to insert data");
        setSuccessMessage("Failed to place student");
      }
    } catch (error) {
      console.log("Error:", error);
    }
    sendSms(studentPhone,studentFirstName, studentRotationName, endRotationDate, startRotationDate,location);
  };

  const sendSms = async (
    phone,
    studentFirstName,
    studentRotationName,
    endRotationDate,
    startRotationDate,
    location
  ) => {   

    const smsData = {
      phone: phone,
      studentRotationName: studentRotationName,
      message: `Hi ${studentFirstName.toUpperCase()} you have been placed in the ${studentRotationName.toUpperCase()} rotation area located in ${location.toUpperCase()} from ${startRotationDate} to ${endRotationDate}.Thank you`,
    };
    try {
      const response = await fetch("http://localhost:3001/SendSms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(smsData),
      });

      if (response.ok) {
        console.log("Sms sent successfully");
        setSuccessMessage("Sms sent successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        console.log("Failed to send sms");
        setSuccessMessage("Failed to send sms");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h6>
            <i className="fas fa-clipboard-list"></i>
            Clinical Rotation placement
          </h6>
        </div>
        <div className="card-body">
          {successMessage && (
            <h6 className="text-center text-success">{successMessage}</h6>
          )}
          <form className="card p-2">
            <div className="form-group row">
              <label htmlFor="student_name" className="col-sm-2 col-form-label">
                Student Name
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control mb-2"
                  id="student_name"
                  name="student_name"
                  onChange={(e) => setStudentId(e.target.value)}
                >
                  {personalInformation.length === 0 ? (
                    <option>Loading...</option>
                  ) : (
                    personalInformation.map((studentIdData) => (
                      <option value={studentIdData.id} key={studentIdData.id}>
                        {studentIdData.id +
                          " " +
                          studentIdData.firstName +
                          " " +
                          studentIdData.secondName}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <label
                htmlFor="rotation-type"
                className="col-sm-2 col-form-label"
              >
                Rotation Name
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="rotation-type"
                  name="rotation-type"
                  onChange={(e) => setRotationAreaId(e.target.value)}
                >
                  {rotationAreas.length === 0 ? (
                    <option>Loading ...</option>
                  ) : (
                    rotationAreas.map((rotationAreaData) => (
                      <option
                        key={rotationAreaData.id}
                        value={rotationAreaData.id}
                      >
                        {rotationAreaData.id + " " + rotationAreaData.area_name}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="start-date" className="col-sm-2 col-form-label">
                Start Date
              </label>
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
            <div className="form-group row">
              <label htmlFor="end-date" className="col-sm-2 col-form-label">
                End Date
              </label>
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
            <div className="form-group row">
              <div className="col-sm-12">
                <button
                  onClick={handleRotationPlacementSubmit}
                  className="btn btn-dark"
                >
                  <i className="fas fa-save"></i> Submit Placement
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default RotationPlacement;
