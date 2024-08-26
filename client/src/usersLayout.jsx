// UserLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserFooter from './Components/footer';
import UserHeader from './Components/header';

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      < UserHeader/>
      <main className="flex-grow bg-gray-50">
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
      <footer>
      <UserFooter />
      </footer>
    </div>
  );
};

export default UserLayout;

