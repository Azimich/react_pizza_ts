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
    <SearchContext.Provider>

    </SearchContext.Provider>

  )
}

export default App;
