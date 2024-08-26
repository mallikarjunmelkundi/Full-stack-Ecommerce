import React from 'react';
import Slider from 'react-slick';
import { products } from '../Data/index';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer z-10 hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer z-10 hover:bg-gray-700 transition duration-300"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

const ProductCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {products.slice(0, 10).map((product) => (
          <div key={product.id || product.name} className="p-4"> {/* Ensure unique key */}
            <Link to={`/product/${product.id}`} className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
