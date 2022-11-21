import React from "react";
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';
import Skeleton from './components/pizzaBlock/Skeleton';
import PizzaBlock from "./components/pizzaBlock";

function App() {


  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {/* {items.map((obj) => ( <Skeleton key={obj.id} {...obj}/> ))} */}
            {isLoading
              ? [...new Array(20)].map((_, index) => <Skeleton key={index}/>)
              : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
