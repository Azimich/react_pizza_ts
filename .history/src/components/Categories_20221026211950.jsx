import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeIndex === 1 ? }>Все</li>
        <li className={activeIndex === 1 ? }>Мясные</li>
        <li className={activeIndex === 1 ? }>Вегетарианская</li>
        <li className={activeIndex === 1 ? }>Гриль</li>
        <li className={activeIndex === 1 ? }>Острые</li>
        <li className={activeIndex === 1 ? }>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
