import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const onClickCategory = () => {
    setActiveIndex(0)
  }

  return (
    <div className="categories">
      <ul>
        <li className=''>Все</li>
        <li className=''>Мясные</li>
        <li className=''>Вегетарианская</li>
        <li className=''>Гриль</li>
        <li className=''>Острые</li>
        <li className=''>Закрытые</li>
      </ul>
    </div>
  )
}

export default Categories
