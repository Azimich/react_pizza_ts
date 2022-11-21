import React from "react";
import Header from './components/Header';
import HeaderHome from './pages/Home';
import NotFound from './pages/Home';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <NotFound/>
      <div className="content">
        <div className="container">
          <HeaderHome />
      
        </div>
      </div>
    </div>
  )
}

export default App;
