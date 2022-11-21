import React from 'react';

import '../scss/app.scss';
import Sort from '../components/Sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from "../components/pizzaBlock";
import Categories from '../components/Categories';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6338bf62383946bc7febc8c5.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sort}`
    )
    .then((res) => res.json())
    .then((json)=> {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  console.log(categoryId, sortType);
  
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i)=> setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i)=> setSortType(i)}/>
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
