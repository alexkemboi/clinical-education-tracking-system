import React,{useState} from 'react';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
const LoginPage = () => {  
   const [showSignUpForm,setShowSignUpForm]=useState(false);
   const [showLoginForm,setShowLoginForm]=useState(true);
   const[showDashboard,setShowDashboard]=useState(false);
  function handleSignupClick() {
      setShowSignUpForm(true);
      setShowLoginForm(false);
      setShowDashboard(false);
    }
  function handleLogin(){
    setShowDashboard(true);
    setShowSignUpForm(false);
    setShowLoginForm(false);
  }
return (
    <>
    {showLoginForm&&<div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-header bg-dark text-white text-center">
          <i class="fas fa-user-md fa-3x"></i>
          <h4 class="mb-0"> Clinical Education Tracking System</h4>

          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>
              
              <button type="submit" class="btn btn-dark btn-block" onClick={handleLogin}>
                      Login
                </button>                     
                 
              <div className='row mt-4'>
                <div className='col-8'> <label className='text-danger text-center'>Don't you have account?</label>                 
                </div>
                <div className='col-4'>
                  <button type="submit" class="btn btn-warning btn-block" onClick={handleSignupClick}>
                      SignUp
                    </button>                    
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    }
  {showSignUpForm && <Signup />}
  {showDashboard && <Dashboard/>}
  </>
  )
 
};

export default LoginPage;
