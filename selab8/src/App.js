import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import Home from './components/Home';
// import Sell from './components/Sell';
import Rent from './components/Rent';
import Buy from './components/Buy';
import History from './components/History';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/sell" element={<Sell />} /> */}
      <Route path="/rent" element={<Rent />} />
      <Route path="/buy" element={<Buy/>} />
      <Route path="/history" element={<History/>} />


    </Routes>
  );
};

export default App;
