import React from 'react';

import '../scss/app.scss';
import Sort from '../components/Sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from "../components/pizzaBlock";
import Categories from '../components/Categories';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(8786);
  const [sortType, setSortType] = React.useState(0);


  React.useEffect(() => {
    fetch('https://6338bf62383946bc7febc8c5.mockapi.io/items')
    .then((res) => res.json())
    .then((json)=> {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="content__top">
        <Categories value={category} onClickCategory={(i)=> onClickCategory(i)} />
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(20)].map((_, index) => <Skeleton key={index}/>)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
        }
      </div>
    </>
  )
}

export default Home;
