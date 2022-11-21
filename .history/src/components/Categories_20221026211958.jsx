import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeIndex === 1 ? 'active' : }>Все</li>
        <li className={activeIndex === 1 ? 'active' : }>Мясные</li>
        <li className={activeIndex === 1 ? 'active' : }>Вегетарианская</li>
        <li className={activeIndex === 1 ? 'active' : }>Гриль</li>
        <li className={activeIndex === 1 ? 'active' : }>Острые</li>
        <li className={activeIndex === 1 ? 'active' : }>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
