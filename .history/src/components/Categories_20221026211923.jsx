import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li clas>Все</li>
        <li clas>Мясные</li>
        <li clas>Вегетарианская</li>
        <li clas>Гриль</li>
        <li clas>Острые</li>
        <li clas>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
