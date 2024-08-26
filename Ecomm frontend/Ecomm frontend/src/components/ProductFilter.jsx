import React from 'react';

const ProductFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-6 p-6 bg-white shadow-md rounded-lg">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          name="category"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="baby">Baby</option>
          <option value="toy">Toy</option>
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Brand</label>
        <select
          name="brand"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={filters.brand}
          onChange={handleChange}
        >
          <option value="">All Brands</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Rating</label>
        <select
          name="rating"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={filters.rating}
          onChange={handleChange}
        >
          <option value="">All Ratings</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Sort by</label>
        <select
          name="sortOption"
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={filters.sortOption}
          onChange={handleChange}
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;


