import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCarousel from '../components/ProductCarousel';

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Featured Products</h2>
        <ProductCarousel />
      </div>
    </>
  );
};

export default HomePage;
