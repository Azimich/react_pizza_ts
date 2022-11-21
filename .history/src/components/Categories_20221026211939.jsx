import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li className={active}>Все</li>
        <li className={active}>Мясные</li>
        <li className={active}>Вегетарианская</li>
        <li className={active}>Гриль</li>
        <li className={active}>Острые</li>
        <li className={active}>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
