import React from 'react'
import styles from './Info.module.scss';
const Info = ({image, title, description, onClose}) => {
  
  return (
   <div className={`${styles.cartEmpty} d-flex align-center justify-center flex-column flex`}>
        <img className="mb-20" width={120} src={image} alt="Пустая корзина" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button className={`${styles.greenButton} greenButton`} onClick={onClose}>
            <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
        </button>
    </div>
  )
};

export default Info;
