import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { validatePhone } from '../utils/validation';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const message = validatePhone(phone);
    if (message) {
      setError(message);
    } else {
      setError('');
      navigate('/main');
    }
  };

  return (
    <Layout>
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-sm mx-auto text-center">
        <h2 className="text-2xl font-bold text-white drop-shadow mb-4">Login</h2>
        <input
          type="text"
          placeholder="+254712345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 mb-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-200 text-sm mb-3">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Login
        </button>
      </div>
    </Layout>
  );
};

export default Login;
