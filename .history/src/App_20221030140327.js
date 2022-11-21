import React from "react";
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';

function App() {
  const [items, setIte]

  fetch('https://6338bf62383946bc7febc8c5.mockapi.io/items').then((res) => {
    return res.json();
  }).then((json)=> {
    console.log(json);
  });

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
