import React from "react";
import BoardGameCard from "../../components/BoardGameCard/BoardGameCard";

function MyFavourite({ boardgames, reference }) {
  return (
    <section id="favourite" className="favourite" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Favourites</h1>
        </div>
        <div className="row">
          {boardgames.length === 0 ? (
            <h2>Your favourites is empty</h2>
          ) : (
            boardgames.map((boardgame) => (
              <BoardGameCard key={boardgame.id} boardgame={boardgame} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default MyFavourite;
