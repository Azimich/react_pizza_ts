import React from "react";
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';


const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/home" element={<Home searchValue={searchValue}/>}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  )
}

export default App;
