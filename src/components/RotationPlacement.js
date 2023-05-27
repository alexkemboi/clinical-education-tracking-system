import React, { useState, useEffect } from "react";
function RotationPlacement() {
  const [successMessage, setSuccessMessage] = useState("");
  const [personalInformation, setPersonalInformation] = useState([]);
  const [rotationAreas, setRotationAreas] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [rotationAreaId, setRotationAreaId] = useState("");
  const [startRotationDate, setStartRotationDate] = useState("");
  const [endRotationDate, setEndRotationDate] = useState("");
  // // Initialize the SDK
  // const AfricasTalking = require("africastalking")(credentials);
  // const africastalking = AfricasTalking({
  //   apiKey: "sandbox",
  //   username:
  //     "e551a40ece6c30dd2ec136b8de4f030c257c3f23cf31a61b69cc27b19a0bad08",
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personalInfoResponse = await fetch(
          "http://localhost:3001/selectPersonalInformation"
        );
        const personalInfoData = await personalInfoResponse.json();
        setPersonalInformation(personalInfoData);
        // console.log(personalInfoData);
      } catch (error) {
        console.error(error);
      }

      try {
        const rotationAreasResponse = await fetch(
          "http://localhost:3001/selectRotationAreas"
        );
        const rotationAreasData = await rotationAreasResponse.json();
        setRotationAreas(rotationAreasData);
        console.log(rotationAreasData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleRotationPlacementSubmit = async (e) => {
    e.preventDefault();
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
        // Reset the form
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
    // try {
    //   const result = await africastalking.SMS.send({
    //     to: "+254726837210",
    //     message: `Hey AT Ninja! Wassup...You have been placed at rotation area ${rotationAreaId}`,
    //     from: "IKONEX",
    //   });
    //   console.log(result);
    // } catch (ex) {
    //   console.error(ex);
    // }
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
            <h6 className="text-center text-warning">{successMessage}</h6>
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
                    personalInformation.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.id + " " + item.firstName + " " + item.secondName}
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
