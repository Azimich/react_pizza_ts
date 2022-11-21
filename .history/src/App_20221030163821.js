import React from "react";
import Header from './components/Header';
import HeaderHome from './pages/Home';
import { NotFound } from './../.history/src/pages/NotFound_20221030162129';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFound />
        </div>
      </div>
    </div>
  )
}

export default App;
