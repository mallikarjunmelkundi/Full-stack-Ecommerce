import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ProductFilter from '../components/ProductFilter';
import { products } from '../Data/index';
import services from '../services/services';


const ProductPage = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || '';
  const [filters, setFilters] = useState({
    category: initialCategory,
    brand: '',
    rating: '',
    sortOption: '',
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const[data,setdata] = useState([]);

  useEffect(()=>{
    const fetchdata = async()=>{
      const response = await services.fetchAllProducts();
      setdata(response.data)
      console.log(data)
      console.log(response.data)
    }
    fetchdata()
  },[])

  useEffect(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    if (filters.rating) {
      filtered = filtered.filter(product => product.rating >= parseInt(filters.rating));
    }

    if (filters.sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortOption === 'popular') {
      filtered.sort((a, b) => b.popularity - a.popularity);
    }

    setFilteredProducts(filtered);
  }, [filters]);

  useEffect(() => {
    if (initialCategory) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: initialCategory,
      }));
    }
  }, [initialCategory]);

  return (
    <div className="container mx-auto py-10 flex">
      <div className="w-1/4 pr-4">
        <ProductFilter filters={filters} setFilters={setFilters} />
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductPage;





// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ProductList from '../components/ProductList';
// import ProductFilter from '../components/ProductFilter';
// import services from '../services/services';
// import axios from 'axios';
// // import { products } from './path/to/your/products';


// const ProductPage = () => {
//   const location = useLocation();
//   const initialCategory = location.state?.category || '';
//   const [filters, setFilters] = useState({
//     category: initialCategory,
//     brand: '',
//     rating: '',
//     sortOption: '',
//   });

//   const [products, setProducts] = useState([]); 
//   const [filteredProducts, setFilteredProducts] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await services.fetchAllProducts();
//         setProducts(response.data); 
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     let filtered = [...products]; 

//     if (filters.category) {
//       filtered = filtered.filter(product => product.category === filters.category);
//     }

//     if (filters.brand) {
//       filtered = filtered.filter(product => product.brand === filters.brand);
//     }

//     if (filters.rating) {
//       filtered = filtered.filter(product => product.rating >= parseInt(filters.rating));
//     }

//     if (filters.sortOption === 'price-asc') {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (filters.sortOption === 'price-desc') {
//       filtered.sort((a, b) => b.price - a.price);
//     } else if (filters.sortOption === 'popular') {
//       filtered.sort((a, b) => b.popularity - a.popularity);
//     }

//     setFilteredProducts(filtered);
//   }, [filters, products]); 

//   useEffect(() => {
//     if (initialCategory) {
//       setFilters((prevFilters) => ({
//         ...prevFilters,
//         category: initialCategory,
//       }));
//     }
//   }, [initialCategory]);

//   // axios.post('http://localhost:8080/api/products/create', products)
//   // .then(response => {
//   //   console.log('Products saved successfully', response.data);
//   // })
//   // .catch(error => {
//   //   console.error('There was an error saving the products!', error);
//   // });


//   const product = {
//     name: 'Men Product 1',
//     price: 29.99,
//     image: 'img_path',
//     popularity: 5,
//     category: 'men',
//     brand: 'Brand A',
//     rating: 4
//   };
  
//   axios.post('http://localhost:8080/api/products/create', product)
//     .then(response => {
//       console.log('Product saved successfully', response.data);
//     })
//     .catch(error => {
//       console.error('There was an error saving the product!', error);
//     });
  

//   return (
//     <div className="container mx-auto py-10 flex">
//       <div className="w-1/4 pr-4">
//         <ProductFilter filters={filters} setFilters={setFilters} />
//       </div>
//       <div className="w-3/4">
//         <h1 className="text-3xl font-bold mb-6">All Products</h1>
//         <ProductList products={filteredProducts} />
//       </div>
//     </div>
//   );
// };

// export default ProductPage;










