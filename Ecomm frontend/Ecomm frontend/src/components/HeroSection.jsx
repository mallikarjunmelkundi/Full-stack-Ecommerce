import React from 'react';
import '../animations.css';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to E-Shop</h1>
        <p className="text-xl mb-8 animate-fade-in delay-200">Your one-stop shop for the best products</p>
        <a 
          href="/products" 
          className="bg-white text-indigo-600 py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-600 hover:text-white duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

