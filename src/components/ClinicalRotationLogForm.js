import React, { useEffect, useState } from "react";
const ClinicalRotationForm = () => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [activity, setActivity] = useState("");
  const [notes, setNotes] = useState("");
  const [mood, setMood] = useState("");
  const [location, setLocation] = useState("");
  const [patientCount, setPatientCount] = useState(0);
  const [proceduresPerformed, setProceduresPerformed] = useState("");
  const [skillsDeveloped, setSkillsDeveloped] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data
    const formData = {
      day,
      date,
      timeIn,
      timeOut,
      activity,
      notes,
      mood,
      location,
      patientCount,
      proceduresPerformed,
      skillsDeveloped,
    };

    useEffect = () => {
      // Make a fetch request to post the form data
      fetch("http://localhost:3001/insertLogData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };
    // Perform any necessary validation or data processing here
    // For simplicity, this example will just log the form data
    console.log({
      day,
      date,
      timeIn,
      timeOut,
      activity,
      notes,
      mood,
      location,
      patientCount,
      proceduresPerformed,
      skillsDeveloped,
    });

    // Clear form fields after submission
    setDay("");
    setDate("");
    setTimeIn("");
    setTimeOut("");
    setActivity("");
    setNotes("");
    setMood("");
    setLocation("");
    setPatientCount(0);
    setProceduresPerformed("");
    setSkillsDeveloped("");
  };

  return (
    <div className="container mt-1">
      <div className="card p-1">
        <h6 className="text-left">Clinical Rotation Activities Log form</h6>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Day:
              <input
                type="date"
                className="form-control"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Date:
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Time In:
              <input
                type="time"
                className="form-control"
                value={timeIn}
                onChange={(e) => setTimeIn(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Time Out:
              <input
                type="time"
                className="form-control"
                value={timeOut}
                onChange={(e) => setTimeOut(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Activity:
              <input
                type="text"
                className="form-control"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Notes:
              <textarea
                className="form-control"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Mood:
              <input
                type="text"
                className="form-control"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Location:
              <input
                type="text"
                className="form-control"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Patient Count:
              <input
                type="number"
                className="form-control"
                value={patientCount}
                onChange={(e) => setPatientCount(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Procedures Performed:
              <input
                type="text"
                className="form-control"
                value={proceduresPerformed}
                onChange={(e) => setProceduresPerformed(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 mb-1">
            <label className="form-label">
              Skills Developed:
              <input
                type="text"
                className="form-control"
                value={skillsDeveloped}
                onChange={(e) => setSkillsDeveloped(e.target.value)}
              />
            </label>
          </div>
          <div className="col-12 mb-1">
            <button type="submit" className="btn btn-warning text-dark">
              <i className="fa fas-save"></i>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicalRotationForm;
