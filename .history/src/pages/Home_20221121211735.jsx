// ИЗ БИБЛИОТЕКИ
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
// ИЗ КОМПОНЕНТОВ
import '../scss/app.scss';
import Sort, { sortList } from '../components/Sort';
import Skeleton from '../components/pizzaBlock/Skeleton';
import PizzaBlock from "../components/pizzaBlock";
import Categories from '../components/Categories';
import Pagination from '../components/pagination/Pagination';
import { SearchContext } from '../App';
// ИЗ REDUX
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/fiterSlice';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  
  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //ИЗМЕНЕНИЯ КАТЕГОРИЙ 
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  //Вызов пагинации из редакса 
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  
  //useEffec
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
    }
  }, []);

  //Оснавной useEffect 
  React.useEffect(() => {
    

    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  //useEffect чтобы влиять на ссылки
  React.useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
      currentPage,
    })
    navigate(`?${queryString}`);
  }, [categoryId, sort.sortProperty, currentPage] ); 

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
  const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index}/>)

  return (
    <div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  )
}

export default Home;
