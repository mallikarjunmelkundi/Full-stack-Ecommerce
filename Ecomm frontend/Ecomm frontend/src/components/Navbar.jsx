import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Navbar = () => {
  const { cart, setCart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      axios.get('/api/v1/user/cart').then(response => {
        setCart(response.data.cartItems);
      });
    }
  }, [isAuthenticated, setCart]);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          E-Shop
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-200 transition duration-300">Products</Link>
          <Link to="/about" className="text-white hover:text-gray-200 transition duration-300">About</Link>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/products', { state: { searchQuery: e.target.search.value } }); }} className="relative text-gray-600 flex items-center">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-gray-300"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887l-14.02-14.02c3.486-4.073,5.604-9.303,5.604-14.863c0-12.686-10.354-23.041-23.041-23.041   S0.646,10.318,0.646,23.004s10.354,23.041,23.041,23.041c5.326,0,10.353-1.797,14.36-5.092l14.18,14.18   c0.789,0.789,2.067,0.789,2.855,0l0.204-0.204C55.938,53.954,55.938,52.676,55.146,51.887z M23.687,41.934   c-10.431,0-18.93-8.498-18.93-18.93s8.498-18.93,18.93-18.93s18.93,8.498,18.93,18.93S34.119,41.934,23.687,41.934z" />
              </svg>
            </button>
          </form>
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="relative text-white hover:text-gray-200 mx-2 transition duration-300">
                <FaShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs font-bold text-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <div className="relative inline-block text-left">
                <button onClick={toggleUserDropdown} className="text-white hover:text-gray-200 mx-2 transition duration-300 align-middle">
                  <FaUserCircle size={20} />
                </button>
                {isUserDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Order History</Link>
                      {user?.role === 'ADMIN' && (
                        <Link to="/AdminLogin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Admin Dashboard</Link>
                      )}
                      <button onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Logout</button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
              <Link to="/signup" className="text-white hover:text-gray-200 transition duration-300">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
