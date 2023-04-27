import React from 'react';

const LoginPage = () => {
  return (
    <div class="container">
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
              <button type="submit" class="btn btn-dark btn-block">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
