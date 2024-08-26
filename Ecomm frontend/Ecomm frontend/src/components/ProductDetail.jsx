import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data/index';
import { useCart } from '../context/CartContext';
import ReviewSection from './ReviewSection';
import RelatedProductsCarousel from './RelatedProductsCarousel';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="container mx-auto py-10 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg p-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/3 rounded-lg" />
        <div className="w-full md:w-2/3 md:ml-6 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-4">${product.price}</p>
          <div className="mb-4">
            <span className="text-gray-600">Brand: </span>
            <span className="text-gray-900">{product.brand}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600">Category: </span>
            <span className="text-gray-900">{product.category}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600">Rating: </span>
            <span className="text-yellow-500">{product.rating} stars</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600">Popularity: </span>
            <span className="text-gray-900">{product.popularity}</span>
          </div>
          <p className="text-base text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button 
            onClick={() => addToCart(product)} 
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-500 transition duration-300 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-10">
        <ReviewSection />
      </div>
      <div className="mt-10">
        <RelatedProductsCarousel category={product.category} />
      </div>
    </div>
  );
};

export default ProductDetail;
