import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // // Example login validation
    // if (email === 'admin@example.com' && password === 'password') {
    //   onLogin(); // Call the onLogin function to set logged-in state
    //   navigate('/AdminDashboard'); // Redirect to AdminDashboard after successful login
    // } else {
    //   setError('Invalid email or password');
    // }



    
    const data = {
      "email":"admin@gmail.com",
      "password":"admin"
  }
    axios.post('http://localhost:8080/api/v1/auth/signin', data)
    .then(response => {
      console.log('Products saved successfully', response.data);
      if(response.data&&response.data.token){
        sessionStorage.setItem("token",response.data.token)
      }
      if(response.data&&response.data.refreshToken){
        sessionStorage.setItem("refreshToken",response.data.refreshToken)

      }
      onLogin(); 
      navigate('/AdminDashboard'); 
      
    })
    
    .catch(error => {
      console.error('There was an error saving the products!', error);
    });
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900">Admin Login</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
