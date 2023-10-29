import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { addToCart, getProducts } from '../Api/api'; 

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); 
  const [products, setProducts] = useState([]);
  const isVerified = true; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        if (response.success) {
          setProducts(response.data);
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (item) => {
    if (isVerified) {
      if (item) {
        try {
          const response = await addToCart(item);
          setCart([...cart, response]);
          console.log('Item added to cart:', response);
        } catch (error) {
          console.error('Error adding to cart:', error.message);
        }
      }
    } else {
      navigate('/login');
    }
  };

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
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;
