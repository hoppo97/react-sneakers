import React from 'react';
import { Link } from "react-router-dom";
import Card from "../components/Card";
import AppContext from "../context"


function Favorites({onAddToFavorite}) {
    const { favorites, isFavoriteAdded } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40"> 
                <h1>Мои закладки</h1>
            </div>

            {favorites.length > 0 ?
                <div className="d-flex flex-wrap justify-center">
                        {favorites.map((item, index) => (
                            <Card  
                            key={item.id}
                            {...item}
                            
                            onFavorites={onAddToFavorite}
                            />
                        ))}
                </div> :
                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className="mb-20" width={70} height={70} src="/img/favotires-empty.png" alt="Пустые закладки" />
                    <h2>Закладок нет :(</h2>
                    <p className="opacity-6">Вы ничего не добавляли в закладки</p>
                    <Link to="/">
                        <button className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
                        </button>
                    </Link>
                </div>
        }
            
        </div>
    );
}

export default Favorites;