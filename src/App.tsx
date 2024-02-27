import React from 'react';
import Navbar from './components/navbar';
import ProductsGrid from './components/product/product-grid';
import PaginationComp from './components/pagination';
// import logo from './logo.svg';

function App() {
  return (
    <div className="w-full h-auto p-8">
      <Navbar />
      <ProductsGrid />
      <PaginationComp />
    </div>
  );
}

export default App;
