import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Excellent product! Highly recommend.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Very good quality, but shipping was a bit slow.',
  },
  
];

const ReviewSection = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 mr-2">
                {'★'.repeat(review.rating)}{' '}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <span className="text-gray-900 font-semibold">{review.name}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
