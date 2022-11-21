import React from "react";
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json'

function App() {
  // https://mockapi.io/projects/6338bf62383946bc7febc8c6
  fetch(https:mockapi.io/projects/6338bf62383946bc7febc8c6)

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
            { pizzas.map((obj) => ( <PizzaBlock key={obj.id} {...obj}/> )) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
