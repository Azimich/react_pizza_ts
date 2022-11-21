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

  const handleonClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((items, index) => (
          <li 
            key={index} 
            onClick={()=> onClickCategory(index)} 
            className={activeIndex === index ? 'active' : ''}>
            {items}
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories
