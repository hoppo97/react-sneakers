import React from 'react'

const Favorite = ({onAddToFavorites, isItemsInFavorites}) => {
  return (
    <div className="favorite">
      <img onClick={onAddToFavorites} src={isItemsInFavorites ? "/img/heart-liked.svg"  : "/img/heart-unliked.svg" } alt="Unliked" />
    </div>
)};

export default Favorite;
