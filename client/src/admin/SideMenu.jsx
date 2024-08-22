// src/components/SideMenu.js
import React from 'react';
import { NavLink ,Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white w-56 mt-20 flex flex-col">
      <nav className="flex-1 fixed">
        <ul>
          <li>
            <NavLink
              to="/"
              className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            >
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="block py-2.5 px-4 hover:bg-gray-700 transition duration-200"
            >
              Settings
            </NavLink>
          </li>
        </ul>
        <div className='flex w-56 mt-74 mt-72'>
        <Link href="/profile" className="py-2.5 px-4 w-full hover:bg-gray-700 transition duration-200">Profile</Link>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
