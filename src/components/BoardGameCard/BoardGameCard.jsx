import React, { useContext } from "react";
import "./BoardGameCard.css";
import BoardGameRating from "../BoardGameRating/BoardGameRating";
import { AppContext } from "../../App";

function BoardGameCard({ boardgame }) {
  const { favourite, setFavourite, bag, setBag } = useContext(AppContext);

  const handleAddToFavourites = (boardgame) => {
    if (favourite.includes(boardgame)) return;

    setFavourite([...favourite, boardgame]);
  };

  const handleRemoveFromFavourites = (boardgame) => {
    setFavourite(favourite.filter((item) => item.id !== boardgame.id));
  };

  const handleAddToBag = (boardgame) => {
    setBag([...bag, boardgame]);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={boardgame.img} alt={boardgame.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${
            favourite.includes(boardgame) ? "active" : undefined
          }`}
          onClick={
            favourite.includes(boardgame)
              ? () => handleRemoveFromFavourites(boardgame)
              : () => handleAddToFavourites(boardgame)
          }
        >
          <i className="bi bi-suit-heart-fill"></i>
        </a>
        <div className="boardGameFeatures">
          <span className="boardGameType">Weight: {boardgame.weight}</span>
          <BoardGameRating rating={boardgame.rating} />
        </div>
        <div className="boardGameTitle mt-1 mb-1">Title: {boardgame.title}</div>
        <div className="boardGamePrice">Price: {boardgame.price} RON</div>

        <a
          href="#"
          className="addBag"
          onClick={() => handleAddToBag(boardgame)}
        >
          <i className="bi bi-bag-check-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default BoardGameCard;
