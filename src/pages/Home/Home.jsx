import React from "react";
import BoardGamesCarousel from "../../components/BoardGameCarousel/BoardGameCarousel";

function Home({ boardgames, reference }) {
  return (
    <section id="home" className="home active" ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <BoardGamesCarousel boardgames={boardgames} />
        </div>
      </div>
    </section>
  );
}

export default Home;
