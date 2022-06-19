import React from 'react'
const Info = ({image, title, description, onClose}) => {
  
  return (
   <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width={120} src={image} alt="Пустая корзина" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button className="greenButton" onClick={onClose}>
            <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
        </button>
    </div>
  )
};

export default Info;
