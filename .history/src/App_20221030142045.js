import React from "react";
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6338bf62383946bc7febc8c5.mockapi.io/items')
    .then((res) => {res.json();}).then((json)=> {
      setItems(json);
    });
  }, []);

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
            { items.map((obj) => ( <PizzaBlock key={obj.id} {...obj}/> )) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
