import React, { createContext, useState, useContext } from 'react';

// Create the context
const ProductContext = createContext();

// Provider component to wrap the app
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const addProduct = async (product) => {
      try {
        const response = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
        const newProduct = await response.json();
        setProducts(prev => [...prev, newProduct]);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  
    // Similar updates for updateProduct and deleteProduct
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    return (
      <ProductContext.Provider value={{ products, loading, addProduct, updateProduct, deleteProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };