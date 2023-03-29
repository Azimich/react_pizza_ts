import React, { FC } from 'react';
import useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';

interface ICategoriesProps {
  value: number;
  onChangeCategory: (i: number) => void;
}

const Categories: FC <ICategoriesProps> = ({value, onChangeCategory}) => {
  useWhyDidYouUpdate('Categories', { value, onChangeCategory });
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
