import React from 'react'

const Plus = ({ onClickPlus, cartItems, id}) => {
  
  const itemsInCart = cartItems.some(obj => Number(obj.id) === Number(id));
  
  return (
    <div>
      <img 
        className="plus"
        src={itemsInCart ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
        alt="plus" 
        onClick={onClickPlus}
    />
    </div>
  )
}

export default Plus
