import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li >Все</li>
        <li >Мясные</li>
        <li >Вегетарианская</li>
        <li >Гриль</li>
        <li >Острые</li>
        <li >Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
