import './App.css';
import Hero from './hero/Hero';
import httpService from './services/http-service';
import Product from './product/product';
import React, { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const loadData = () => {
    const service = new httpService();
    service.getProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        console.error('Error in getProducts:', error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const productList = () => {
    return products.map((product) => (
      <div className="col-md-6 col-lg-3 " key={product._id}>
        <Product title={product.title} price={product.price} img={product.img} />
      </div>
    ));
  };

  return (
    <div className="App">
      <Hero />

      <div className='row product-section'> 
        <div className='best-text'><h3>Our Best Selling Items</h3></div>
        {productList()}
      </div>
      
    </div>
  );
}

export default App;
