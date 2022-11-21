import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    
  }

  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
