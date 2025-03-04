import React, { useState } from 'react';
import Logo from '../../Assests/logo.png';
import Background from '../../Assests/AI.jpeg';

function Login() {
  // State for email, password, errors, and server error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  // Function to validate email and password inputs
  const validate = () => {
    const newErrors = {};
    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    // If no validation errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login successful', data);
          // Handle successful login, e.g., store the token, redirect, etc.
        } else {
          const errorData = await response.json();
          setServerError(errorData.error || 'Login failed');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setServerError('An error occurred while logging in');
      }
    } else {
      // If validation errors exist, set errors in state
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
          </div>
          {serverError && <p className="text-red-500 text-xs mb-4">{serverError}</p>}
          <div className="flex flex-col items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" >
              Login
            </button>
            <p className="text-gray-700 text-sm">
              Don't have an account? <a href="/SignUp" className="text-blue-500 hover:text-blue-700">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
