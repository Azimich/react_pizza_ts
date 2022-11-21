import React from "react";
import Header from './components/Header';
import NotFoundBlock from "./components/notFoundBlock";
import HeaderHome from './pages/Home';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <HeaderHome />
          <NotFoundBlock
        </div>
      </div>
    </div>
  )
}

export default App;
