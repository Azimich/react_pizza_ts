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

  return (
    <div className="container">
      <h2>{pizza.title}</h2>
      <h4>{}</h4>
    </div>
  )
}

export default FullPizza;
