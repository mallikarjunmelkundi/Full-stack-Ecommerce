import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-lg text-gray-600">${product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;