import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({
    address: 'Loading...',
    city: 'Loading...',
    email: 'Loading...',
    phone: 'Loading...'
  });

  useEffect(() => {
    axios.get('/api/v1/contact')
      .then(response => {
        setContactInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching contact information:', error);
      });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">E-Shop</h3>
            <p className="text-gray-400">
              Your one-stop shop for the best products. Quality and satisfaction guaranteed.
            </p>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:underline text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/products" className="hover:underline text-gray-400 hover:text-white transition duration-300">Products</a></li>
              <li><a href="/contact" className="hover:underline text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">{contactInfo.address}</p>
            <p className="text-gray-400">{contactInfo.city}</p>
            <p className="text-gray-400">Email: {contactInfo.email}</p>
            <p className="text-gray-400">Phone: {contactInfo.phone}</p>
          </div>
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            <form
              className="mt-4"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                axios.post('/api/v1/newsletter/subscribe', { email })
                  .then(() => {
                    alert('Subscribed successfully!');
                  })
                  .catch((error) => {
                    console.error('Subscription error:', error);
                  });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          &copy; 2024 E-Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
