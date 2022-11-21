import React from 'react';

import '../scss/app.scss';
import Sort from '../components/Sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from "../components/pizzaBlock";
import Categories from '../components/Categories';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://6338bf62383946bc7febc8c5.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
    .then((res) => res.json())
    .then((json)=> {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const pizzas = items.filter(obj => {
    if (obj.title.includes(searchValue)) {
      return true;
    } else {}
  }).map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
  const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index}/>)
  
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i)=> setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i)=> setSortType(i)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </>
  )
}

export default Home;