import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { getProducts } from '../API/api';

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        if (response.success) {
          setProducts(response.data);
        }
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
    <h1 className="text-2xl font-semibold mb-4">Home</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-indigo-600 font-semibold mt-2">Price: ${product.price}</p>
          <img src={product.img} alt="Product" className="mt-4" />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;
