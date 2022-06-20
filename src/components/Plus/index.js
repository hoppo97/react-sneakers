import React from 'react'

import styles from './Plus.module.scss'

const Plus = ({ onClickPlus, isItemInCart}) => {
  return (
    <div>
      <img 
        className="cu-p"
        src={isItemInCart ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
        alt="plus" 
        onClick={onClickPlus}
    />
    </div>
  )
}

export default Plus;
