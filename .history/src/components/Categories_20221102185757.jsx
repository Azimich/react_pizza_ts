import React from 'react';

const Categories = ({value, onClickCategory}) => {

  console.log(value);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  // const handleOnClickCategory = (index) => {
  //   setActiveIndex(index);
  // }

  return (
    <div className="categories">
      <ul>
        {categories.map((items, i) => (
          <li 
            key={i} 
            onClick={()=> onClickCategory(i)} 
            className={activeIndex === i ? 'active' : ''}>
            {items}
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories
