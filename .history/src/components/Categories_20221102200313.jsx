import React from 'react';

const Categories = ({value, onChangeCategory}) => {

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
        {categories.map((categoryName, i) => (
          <li 
            key={i} 
            onClick={()=> onClickCategory(i)} 
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories
