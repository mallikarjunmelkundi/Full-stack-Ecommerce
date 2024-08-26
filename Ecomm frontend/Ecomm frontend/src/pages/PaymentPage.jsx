import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrdersContext';

const PaymentPage = () => {
  const { cart, dispatch } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({ name: '', cardNumber: '', expiryDate: '', cvv: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (!paymentInfo.name || !paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      alert('Please fill out all payment information');
      return;
    }

    // Add order
    const order = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2),
      paymentInfo
    };
    addOrder(order);

   
    dispatch({ type: 'CLEAR_CART' });

    
    navigate('/profile');
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Payment Information</h1>
      <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        {[
          { label: 'Name on Card', name: 'name', type: 'text' },
          { label: 'Card Number', name: 'cardNumber', type: 'text' },
          { label: 'Expiry Date', name: 'expiryDate', type: 'text' },
          { label: 'CVV', name: 'cvv', type: 'text' },
        ].map(({ label, name, type }) => (
          <div className="mb-4" key={name}>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              value={paymentInfo[name]}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <button
          onClick={handlePlaceOrder}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
