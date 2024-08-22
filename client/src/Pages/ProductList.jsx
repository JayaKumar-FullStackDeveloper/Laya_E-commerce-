import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CollectionList = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/products`)
      .then((result) => {
        console.log('API Response:', result.data); 
        setProducts(result.data);
      }).catch((err) => {
        console.log('Error fetching the collections:', err);
      });
  }, [apiUrl]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Product List</h1>
      <div className="flex justify-center flex-wrap">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="m-4 p-4 border border-gray-300 rounded-lg w-64 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={product.href}>
                <img src={product.imgSrc} alt={product.alt} className="w-full h-auto mb-2" />
                <h2 className="text-xl font-semibold text-gray-700">{product.title}</h2>
              </Link>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default CollectionList;
