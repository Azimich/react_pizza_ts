import React from 'react';
import { useSelector } from 'react-redux';

import '../scss/app.scss';
import Sort from '../components/Sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from "../components/pizzaBlock";
import Categories from '../components/Categories';
import Pagination from '../components/pagination/Pagination';
import { SearchContext } from '../App';


const Home = () => {
  const categoryId = useSelector((state) => state.filter.categoryId)
  c

  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  const onChangeCategory = (id) => {
    console.log(id);
  }

  React.useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch (
      `https://6338bf62383946bc7febc8c5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
    .then((res) => res.json())
    .then((json)=> {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
  const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index}/>)

  return (
    <div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sortType} onChangeSort={(i)=> setSortType(i)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}

export default Home;
