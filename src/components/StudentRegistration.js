import { useState } from "react";
function StudentRegistratiion() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showPersonalInformation, setShowPersonalInformation] = useState(false);
  const [showEducationalInformation, setShowEducationalInformation] =
    useState(false);
  const [showEmergencyInformation, setShowEmergencyInformation] =
    useState(false);
  const [showAdditionalInformation, setShowAdditionalInformation] =
    useState(false);

  //submit personal information
  const handleSubmitPersonalInformation = (e) => {
    e.preventDefault();
    const personalInformation = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
    };
    fetch("http://localhost:3001/personalInformation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personalInformation),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successfully saved personal information");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //submit educational information
  const [institutionName, setInsitutionName] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldStudy, setFieldStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const educationalInformation = {
    institutionName: institutionName,
    degree: degree,
    degree: degree,
    fieldStudy: fieldStudy,
    startDate: startDate,
    endDate: endDate,
  };

  const handleSubmitEducationalInformation = () => {
    fetch("http://localhost:3001/EducationalInformation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(educationalInformation),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log("Successfully saved", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPersonalInformation = () => {
    setShowPersonalInformation(true);
    setShowEducationalInformation(false);

    setShowEmergencyInformation(false);
    setShowAdditionalInformation(false);
  };
  const handleShowEducationalInformation = () => {
    setShowEducationalInformation(true);
    setShowPersonalInformation(false);

    setShowEmergencyInformation(false);
    setShowAdditionalInformation(false);
  };

  const handleShowEmergencyInformation = () => {
    setShowEmergencyInformation(true);
    setShowPersonalInformation(false);
    setShowEducationalInformation(false);

    setShowAdditionalInformation(false);
  };
  const handleShowAdditionalInformation = () => {
    setShowAdditionalInformation(true);
    setShowPersonalInformation(false);
    setShowEducationalInformation(false);

    setShowEmergencyInformation(false);
  };
  return (
    <>
      {/* <div className="card">
        <div className=" card-header bg-dark"></div>
        <div className="card-body">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
        <div className="card-footer"></div>
      </div> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0">
        <a class="navbar-brand" href="#">
          Student Registration Form
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={handleShowPersonalInformation}
              >
                <i class="fas fa-user"></i> Personal
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={handleShowEducationalInformation}
              >
                <i class="fas fa-graduation-cap"></i> Educational
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={handleShowEmergencyInformation}
              >
                <i class="fas fa-ambulance"></i> Emergency
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={handleShowAdditionalInformation}
              >
                <i className="fas fa-info-circle"></i> Additional
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {showPersonalInformation && (
        <section>
          <div className="m-auto">
            <div className="card">
              <div className=" card-header bg-dark bg-dark text-light fas fa-user-clinical">
                <h5 className="card-text">
                  <i className="fas fa-user"></i> Personal Information
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div className="form-group">
                        <label htmlFor="first-name">
                          <i className="fas fa-signature"></i> First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                          name="first-name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="last-name">
                          <i className="fas fa-signature"></i> Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                          name="last-name"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="dob">
                          <i className="fas fa-calendar-alt"></i> Date of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                        <label htmlFor="gender">
                          <i className="fas fa-venus-mars"></i> Gender
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                        <label htmlFor="address">
                          <i className="fas fa-map-marker-alt"></i> Address
                        </label>
                        <textarea
                          className="form-control"
                          id="address"
                          name="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                        <label htmlFor="phone-number">
                          <i className="fas fa-phone"></i> Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone-number"
                          name="phone-number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label htmlFor="email">
                          <i className="fas fa-envelope"></i> Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#successModal"
                  className="btn bg-dark text-white"
                  onClick={handleSubmitPersonalInformation}
                >
                  <i className="fas fa-save"></i> Save personal information
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {showEducationalInformation && (
        <div className="m-auto">
          <div className="card">
            <div className="card-header bg-dark">
              <h5 className="card-text text-light">
                <i className="fas fa-graduation-cap"></i> Educational
                Information
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="institution-name">
                    <i className="fas fa-school"></i> Institution Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="institution-name"
                    name="institution-name"
                    onChange={(e) => setInsitutionName(e.target.value)}
                  />
                  <label htmlFor="degree">
                    <i className="fas fa-certificate"></i> Degree
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="degree"
                    name="degree"
                    onChange={(e) => setDegree(e.target.value)}
                  />
                  <label htmlFor="field-of-study">
                    <i className="fas fa-book"></i> Field of Study
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="field-of-study"
                    name="field-of-study"
                    onChange={(e) => setFieldStudy(e.target.value)}
                  />
                  <label htmlFor="start-date">
                    <i className="fas fa-calendar-alt"></i> Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="start-date"
                    name="start-date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <label htmlFor="end-date">
                    <i className="fas fa-calendar-alt"></i> End Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="end-date"
                    name="end-date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-dark text-white"
                  onClick={handleSubmitEducationalInformation}
                >
                  <i className="fas fa-save"></i> Save Educational information
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showEmergencyInformation && (
        <div className=" m-auto">
          <div className="card">
            <div className=" card-header bg-dark">
              <h5 className="card-text text-light">
                <i className="fas fa-ambulance"></i> Emergency Information
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="emergency-contact-name">
                    <i className="fas fa-user"></i> Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emergency-contact-name"
                    name="emergency-contact-name"
                  />
                  <label htmlFor="emergency-contact-relationship">
                    <i className="fas fa-users"></i> Relationship
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emergency-contact-relationship"
                    name="emergency-contact-relationship"
                  />
                  <label htmlFor="emergency-contact-number">
                    <i className="fas fa-phone"></i> Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="emergency-contact-number"
                    name="emergency-contact-number"
                  />
                  <label htmlFor="emergency-contact-email">
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emergency-contact-email"
                    name="emergency-contact-email"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  <i className="fas fa-save"></i> Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showAdditionalInformation && (
        <div className="m-auto">
          <div className="card">
            <div className=" card-header bg-dark">
              <h5 className="card-text text-light">
                <i className="fas fa-info-circle"></i> Additional Information
              </h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="allergies-medical-conditions">
                    <i className="fas fa-notes-medical"></i> Do you have any
                    allergies or medical conditions that we should be aware of?
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="allergies-medical-conditions"
                      id="yes"
                      value="yes"
                    />
                    <label className="form-check-label" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="allergies-medical-conditions"
                      id="no"
                      value="no"
                    />
                    <label className="form-check-label" htmlFor="no">
                      No
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="allergies-medical-conditions-specify">
                      <i className="fas fa-notes-medical"></i> If yes, please
                      specify:
                    </label>
                    <textarea
                      className="form-control"
                      id="allergies-medical-conditions-specify"
                      name="allergies-medical-conditions-specify"
                    ></textarea>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="signature">
                      <i className="fas fa-pen"></i> Signature:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="signature"
                      name="signature"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="certification">
                      <i className="fas fa-clipboard-check"></i> I certify that
                      the information provided in this form is true and accurate
                      to the best of my knowledge.
                    </label>
                    <br />
                    <label htmlFor="student-signature">
                      <i className="fas fa-user"></i> Student Signature:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="student-signature"
                      name="student-signature"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">
                      <i className="fas fa-calendar-alt"></i> Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-dark">
                  <i className="fas fa-save"></i> Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentRegistratiion;
