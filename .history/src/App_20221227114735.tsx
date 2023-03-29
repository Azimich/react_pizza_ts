import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
// import FullPizza from "./pages/FullPizza";

const Cart = React.lazy(() => import(/**/'./pages/Cart'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const FullPizza = React.lazy(() => import('./pages/FullPizza'));


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/pizza/:id"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <FullPizza />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
