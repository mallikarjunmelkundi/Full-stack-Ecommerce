import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-t-lg" />
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-lg text-gray-600 mt-2">${product.price}</p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full mt-6 hover:bg-indigo-500 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

