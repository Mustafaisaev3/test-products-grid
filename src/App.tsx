import React from 'react';
import Navbar from './components/navbar';
import ProductsGrid from './components/product/product-grid';
// import logo from './logo.svg';

function App() {
  return (
    <div className="w-full h-screen p-8">
      <Navbar />
      <ProductsGrid />
    </div>
  );
}

export default App;
