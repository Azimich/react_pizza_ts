import React from "react";
import Header from './components/Header';
import HeaderHome from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <R
          <HeaderHome />
          <NotFound/>
        </div>
      </div>
    </div>
  )
}

export default App;
