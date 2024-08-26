import React from 'react';
import { useOrders } from '../context/OrdersContext';


const ProfilePage = () => {
  const { orders } = useOrders();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">User Profile</h1>
        
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Order History</h1>
      {orders.length === 0 ? (
        <div className="text-center text-gray-600">No orders found</div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Order #{order.id}</h2>
              <p className="text-gray-700 mb-4">Total: ${order.total}</p>
              <ul className="space-y-4">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600">${item.price} x {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-center md:text-left mt-4 md:mt-0">
                      <p className="text-gray-600">Brand: {item.brand}</p>
                      <p className="text-gray-600">Category: {item.category}</p>
                      <p className="text-gray-600">Rating: {item.rating} stars</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
