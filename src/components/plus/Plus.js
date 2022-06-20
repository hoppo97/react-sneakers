import React from 'react'

const Plus = ({ onClickPlus, isItemInCart}) => {
  return (
    <div>
      <img 
        className="plus"
        src={isItemInCart ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
        alt="plus" 
        onClick={onClickPlus}
    />
    </div>
  )
}

export default Plus
