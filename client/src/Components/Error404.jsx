// components/Error404.js
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorOut = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorOut;
