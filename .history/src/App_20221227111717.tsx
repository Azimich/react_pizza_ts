import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from "./pages/FullPizza";

const Cart = React.lazy(() => import('./pages/'));


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/pizza/:id" element={<FullPizza />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
