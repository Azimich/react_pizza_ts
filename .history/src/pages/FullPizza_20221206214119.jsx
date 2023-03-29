import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://6338bf62383946bc7febc8c5.mockapi.io/items/' + id)
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert('Ошибка при получении пиццы!')
      }
    }

    fetchPizza();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!pizza) {
    return 'Жд'
  }

  return (
    <div className="container">
      <img src="pizza.ImgUrl" alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  )
}

export default FullPizza;

// id
// : 
// "1"
// imageUrl
// : 
// "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
// price
// : 
// 245
// rating
// : 
// 6
// sizes
// : 
// [26, 30, 40]
// title
// : 
// "Сырная"
// types

