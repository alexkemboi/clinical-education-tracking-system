import React, { useState } from 'react';
import EvaluationList from './EvaluationsList';
import SupervisorAssessment from './SupervisorAssessment';

const SupervisorsPanel = () => {
  const [name, setName] = useState('');
  const [rotationId, setRotationId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email,setEmail]=useState('');
  const [showSupervisorRegistrationForm,setShowSupervisorRegistrationForm]=useState(false);
  const [showEvaluationPage,setShowEvaluationPage]=useState(true);
  const [showAssessmentPage,setShowAssessmentPage]=useState(false);
  const [showSuccessMessage,setShowSuccessMessage]=useState('');
 const handleShowSupervisorRegistrationPage=(e)=>{
    e.preventDefault();
    setShowSupervisorRegistrationForm(true);
    setShowAssessmentPage(false);
    setShowEvaluationPage(false);
 }
 const handleShowEvaluationPage=(e)=>{
    e.preventDefault();
    setShowSupervisorRegistrationForm(false);
    setShowAssessmentPage(false);
    setShowEvaluationPage(true);
 }
 const handleShowAssessmentPage=(e)=>{
    e.preventDefault();
    setShowSupervisorRegistrationForm(false);
    setShowAssessmentPage(true);
    setShowEvaluationPage(false);
 }
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRotationIdChange = (e) => {
    setRotationId(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Registration submitted');
    console.log('Name:', name);
    console.log('Rotation ID:', rotationId);
    console.log('Phone Number:', phoneNumber);
    console.log('email:',email)
    console.log('Address:', address);
      
        const formData = {
          name: name,
          rotationId: rotationId,
          phoneNumber: phoneNumber,
          email:email,
          address: address,
        };
      
        fetch('http://localhost:3001/registerSuperVisor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Registration successful!', data);
            setShowSuccessMessage('Registration Successful');
            // Reset form fields
            setName('');
            setRotationId('');
            setPhoneNumber('');
            setAddress('');
          })
          .catch((error) => {
            console.error('Registration failed!', error);
            setShowSuccessMessage('Registration failed!');
          });           
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Supervisor</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/evaluations" onClick={handleShowSupervisorRegistrationPage}>Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/evaluations" onClick={handleShowEvaluationPage}>Evaluations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout" onClick={handleShowAssessmentPage}>Assessment</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showSupervisorRegistrationForm&&(<form onSubmit={handleSubmit}>
        {showSuccessMessage&&<h6 className='text-success text-center'>{showSuccessMessage}</h6>}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={handleNameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="rotationId" className="form-label">Rotation ID:</label>
          <input type="text" id="rotationId" className="form-control" value={rotationId} onChange={handleRotationIdChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
          <input type="tel" id="phoneNumber" className="form-control" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="text" id="email" className="form-control" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input type="text" id="address" className="form-control" value={address} onChange={handleAddressChange} />
        </div>
        <button type="submit" className="btn btn-dark">Register</button>
      </form>)}
      {showEvaluationPage&&(<EvaluationList/>)}
      {showAssessmentPage&&(<SupervisorAssessment/>)}
    </div>
  );
};

export default SupervisorsPanel;
