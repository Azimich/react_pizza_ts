// ИЗ БИБЛИОТЕКИ
import React from 'react';
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
import { fetchPizzas } from '../redux/slices/pizzasSlice';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const items = useSelector((state) => state.pizza.items);
  const {searchValue} = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);

  //ИЗМЕНЕНИЯ КАТЕГОРИЙ 
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  //Вызов пагинации из редакса 
  const onChangePage = (page) => {
    dispatch(setCurrentPage(page))
  }

  const getPizzas = async () => {

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    try {
      dispatch(fetchPizzas({
        order,
        sortBy,
        category,
        search,
      }))
    } catch (error) {
      console.log("Некорректный axois", error);
    } finally {
      setIsLoading(false);
    }
  }

  //useEffect чтобы влиять на ссылки
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
  
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage, navigate] ); 

  //Оснавной useEffect который проверяет ссылки после первого редера и сохраняет в редакс
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      
      dispatch (
        setFilters({
          ...params,
          sort,
        })
      )

      isSearch.current = true;
    }
  }, [dispatch]);

  // useEffec Если был первый рендер, тогда запрашиваем пиццы
  React.useEffect(() => {
    getPizzas();

    // window.scrollTo(0, 0);
    // isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);


  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
  const skeletons = [...new Array(20)].map((_, index) => <Skeleton key={index}/>)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </>
  )
}

export default Home;
