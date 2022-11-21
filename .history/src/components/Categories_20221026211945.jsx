import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeIndex ===}>Все</li>
        <li className={activeIndex ===}>Мясные</li>
        <li className={activeIndex ===}>Вегетарианская</li>
        <li className={activeIndex ===}>Гриль</li>
        <li className={activeIndex ===}>Острые</li>
        <li className={activeIndex ===}>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
