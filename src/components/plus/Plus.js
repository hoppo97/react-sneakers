import React from 'react'

const Plus = ({ onClickPlus, cartItems, id}) => {
  const isItemAddedd = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
}
  return (
    <div>
      <img 
        className="plus"
        src={isItemAddedd(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
        alt="plus" 
        onClick={onClickPlus}
    />
    </div>
  )
}

export default Plus
