import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      // Assuming backend returns a success status and a token upon successful login
      if (response.status === 200 && response.data.token) {
        localStorage.setItem('token', response.data.token); // Store the token in localStorage for authentication
        history.push('/dashboard'); // Redirect to dashboard page
      } else {
        setError('Invalid credentials. Please try again.'); // Show error message
      }
    } catch (error) {
      setError('An error occurred. Please try again.'); // Show error message
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
