import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState
  const { id } = useParams();
  
  React.useEffect(() => {
    async function fetchPizza() {
      const { data } = await axios.get('https://6338bf62383946bc7febc8c5.mockapi.io/items/' + id)
    }
  }, [])

  return (
    <div className="container">
      <h1>{id}</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempora corporis iusto exercitationem assumenda odit! Aliquam facilis voluptate excepturi distinctio enim deserunt dolor rerum, nisi veniam nihil incidunt laborum explicabo.
    </div>
  )
}

export default FullPizza;
