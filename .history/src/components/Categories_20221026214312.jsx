import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
    'ds',
    'sd',
    'sd',
  ]

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((items) => {
            return(
              <li onClick={()=> onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>{items}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Categories
