import React from 'react'
import { useParams } from 'react-router-dom';


const FullPizza = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos tempora corporis iusto exercitationem assumenda odit! Aliquam facilis voluptate excepturi distinctio enim deserunt dolor rerum, nisi veniam nihil incidunt laborum explicabo.
    </div>
  )
}

export default FullPizza;