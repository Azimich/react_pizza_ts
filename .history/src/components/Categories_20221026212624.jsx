import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>Все</li>
        <li onClick={() => onClickCategory()} className={activeIndex === 1 ? 'active' : ''}>Мясные</li>
        <li onClick={() => onClickCategory()} className={activeIndex === 2 ? 'active' : ''}>Вегетарианская</li>
        <li onClick={() => onClickCategory()} className={activeIndex === 3 ? 'active' : ''}>Гриль</li>
        <li className={activeIndex === 4 ? 'active' : ''}>Острые</li>
        <li className={activeIndex === 5 ? 'active' : ''}>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
