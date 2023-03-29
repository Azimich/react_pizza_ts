import axios from 'axios';
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'; 

interface IFullPizza {
  imageUrl: string;
  title: string;
  price: number;
}

const FullPizza : FC = () => {
  const [pizza, setPizza] = React.useState<IFullPizza>();
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
  }, [])

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl }alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  )
}

export default FullPizza;

