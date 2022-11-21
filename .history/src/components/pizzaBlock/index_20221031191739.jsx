import React from 'react'

const PizzaBlock = ({ title, price, imageUrl, sizes, types, category }) => {
  const typeNames = [ 'токное', 'традиционное' ];
  const [ activeType, setActiveType ] = React.useState(0);
  const [ activeSize, setActiveSize ] = React.useState(0);

  return (
    <div></div>
  )
}

export default PizzaBlock;
