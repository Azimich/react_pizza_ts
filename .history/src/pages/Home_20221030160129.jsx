import React from 'react'

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6338bf62383946bc7febc8c5.mockapi.io/items')
    .then((res) => res.json())
    .then((json)=> {
      setItems(json);
      setIsLoading(false);
    });
  }, []);
  return (
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
  )
}
