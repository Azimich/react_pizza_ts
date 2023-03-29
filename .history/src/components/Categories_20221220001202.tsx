import React, { FC } from 'react';

interface ICategoriesProps = {

}

const Categories: FC = ({value, onChangeCategory}) => {
  
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li 
            key={i} 
            onClick={()=> onChangeCategory(i)} 
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
