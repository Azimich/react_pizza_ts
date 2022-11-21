import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeInde}>Все</li>
        <li className={activeInde}>Мясные</li>
        <li className={activeInde}>Вегетарианская</li>
        <li className={activeInde}>Гриль</li>
        <li className={activeInde}>Острые</li>
        <li className={activeInde}>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
