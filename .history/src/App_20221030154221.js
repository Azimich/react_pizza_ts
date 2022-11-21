import React from "react";
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss';
import Skeleton from './components/pizzaBlock/Skeleton';
import PizzaBlock from "./components/pizzaBlock";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6338bf62383946bc7febc8c5.mockapi.io/items')
    .then((res) => res.json())
    .then((json)=> {
      setTimeout(() => {
        setItems(json);
        setIsLoading(false);
      } 2000)
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
