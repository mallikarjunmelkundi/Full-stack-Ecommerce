import React from 'react';
import ceo from '../assets/About/ceo.jpg';
import team1 from '../assets/About/team1.jpg';
import team2 from '../assets/About/team2.jpg';
import team3 from '../assets/About/team2.webp';
import team4 from '../assets/About/team3.jpg';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At E-Shop, our mission is to provide high-quality products that enhance the lives of our customers.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Our Vision</h2>
        <p className="text-lg text-gray-600">
          Our vision is to be the leading online marketplace, known for exceptional customer service and innovative products.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Customer Satisfaction</li>
          <li>Integrity and Transparency</li>
          <li>Innovation</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Our History</h2>
        <p className="text-lg text-gray-600">
          E-Shop was founded in 2010 with the goal of bringing the best products to customers worldwide. Over the years, we have grown from a small startup to a leading online retailer, thanks to our commitment to quality and customer satisfaction.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={ceo} alt="Team Member" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">John Doe</h3>
            <p className="text-gray-800">CEO</p>
          </div>
          {/* Add more team members as needed */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={team1} alt="Team Member" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Jane Smith</h3>
            <p className="text-gray-800">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={team2} alt="Team Member" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Mike Johnson</h3>
            <p className="text-gray-800">CFO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={team3} alt="Team Member" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">Emily Davis</h3>
            <p className="text-gray-800">COO</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Customer Testimonials</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg italic text-gray-600">
              "E-Shop has completely transformed my shopping experience. The quality of their products is unmatched, and their customer service is exceptional."
            </p>
            <p className="text-right text-gray-800 font-semibold mt-4">- Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg italic text-gray-600">
              "I've been a loyal customer of E-Shop for years. They always have the latest products and great deals. Highly recommend!"
            </p>
            <p className="text-right text-gray-800 font-semibold mt-4">- Mark Johnson</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Our Partners</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <img src={team1} alt="Partner 1" className="w-24 h-24 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          <img src={team2} alt="Partner 2" className="w-24 h-24 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          <img src={team3} alt="Partner 3" className="w-24 h-24 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          <img src={team4} alt="Partner 4" className="w-24 h-24 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 border-b-4 border-indigo-500 pb-2">Contact Us</h2>
        <p className="text-lg text-gray-600">We'd love to hear from you!</p>
        <p className="text-lg text-gray-600">Email: contact@eshop.com</p>
        <p className="text-lg text-gray-600">Phone: +123 456 7890</p>
      </section>
    </div>
  );
};

export default About;
