import CharacterList from "./charactersList";
import Favorites from "./favorites";
import React, { useState } from 'react';

 function BtnLink(){
    const [showFavorites, setShowFavorites] = useState(false);

    const handleClick = () => {
      setShowFavorites(true);
    };
    const handleGoBack = () => {
      setShowFavorites(false);
    };

    return(
        <div>
            {showFavorites ? (
      <>
        <button
          onClick={handleGoBack}
          type="button"
          className="btn btn-link btn-lg py-4 m-3"
        >
          Volver a Lista de personajes
        </button>
        <Favorites />
      </>
    ) : (
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-link btn-lg py-4 m-4"
      >
        Ver Favoritos
      </button>
    )}
    {showFavorites || <CharacterList />}
  </div>

    )
 }

 export default BtnLink;