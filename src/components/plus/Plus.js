import React from 'react'

const Plus = ({onPlus, isItemAddedd, onClickPlus, id}) => {
  return (
    <div>
      {onPlus && <img 
        className="plus"
        src={isItemAddedd(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
        alt="plus" 
        onClick={onClickPlus}
    />}
    </div>
  )
}

export default Plus
