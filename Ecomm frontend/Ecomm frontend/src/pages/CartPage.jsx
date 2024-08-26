import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const getTotalSum = () => {
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-600">Your cart is empty</div>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index} className="flex flex-col md:flex-row justify-between items-center py-4 border-b">
                <div className="flex items-center mb-4 md:mb-0">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decrementQuantity(product.id)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-400 transition"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-700">{product.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(product.id)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-600">Brand: {product.brand}</p>
                  <p className="text-gray-600">Category: {product.category}</p>
                  <p className="text-gray-600">Rating: {product.rating} stars</p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900">Total: ${getTotalSum()}</h2>
          </div>
          <button
            onClick={() => navigate('/payment')}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
