import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./BoardGameCarousel.css";

function BoardGameCarousel({ boardgames }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };

  return (
    <div className="carousel-container">
      <Carousel slide={false} className="carousel-slider">
        {boardgames.map((boardgame) => (
          <Carousel.Item key={boardgame.id} className="carousel-item">
            <img src={boardgame.img} alt={boardgame.title} />
            <div className={`video ${active ? "active" : undefined}`}>
              <iframe
                width="1200"
                height="720"
                src={boardgame.howToPlay}
                title={boardgame.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
              ></iframe>
            </div>
            <Carousel.Caption>
              <h2>
                {boardgame.title} ({boardgame.year})
              </h2>
              <div className="buttons">
                <a href="#" className="orderButton">
                  Order Now
                </a>
                <a
                  href="#"
                  className={`playButton ${active ? "active" : undefined}`}
                  onClick={handleToggleVideo}
                >
                  <span className="pause">
                    <i className="bi bi-pause-circle-fill"></i>
                  </span>
                  <span className="play">
                    <i className="bi bi-play-circle-fill"></i>
                  </span>
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default BoardGameCarousel;
