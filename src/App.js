import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import Header from './components/Header';

import { useState } from 'react';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  const products = [
    {
      productName: 'Fancy Product',
      productPrice: '$40.00 - $80.00',
      rating: 4,
    },
    {
      productName: 'Special Item',
      productPrice: '$18.00',
      rating: 2,
    },
    {
      productName: 'Sale Item',
      productPrice: '$25.00',
      rating: 4,
    },
    {
      productName: 'Popular Item',
      productPrice: '$48.00',
      rating: 5,
    },
    {
      productName: 'Fancy Item',
      productPrice: '$25.00',
      rating: 2,
    },
    {
      productName: 'Popular Item',
      productPrice: '$72.00',
      rating: 4,
    },
    {
      productName: 'Sale Item',
      productPrice: '$25.00',
      rating: 5,
    },
    {
      productName: 'Special Item',
      productPrice: '$50.00',
      rating: 1,
    },
  ];

  const [cart, setCart] = useState(0);
  const [disable, setDisable] = useState(new Array(8).fill(false));

  return (
    <>
      {/* Navigation Section */}
      <Navigation cart={cart} />

      {/* Header Section */}
      <Header />

      {/* Cards Section */}
      <Cards
        products={products}
        disable={disable}
        setDisable={setDisable}
        cart={cart}
        setCart={setCart}
      />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
