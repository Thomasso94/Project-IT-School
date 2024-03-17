import React, { useState } from "react";
import "./categories.css";
import filterListData from "../../data/filterListData";
import BoardGameCard from "../../components/BoardGameCard/BoardGameCard";

function Categories({ boardgames, reference }) {
  const [data, setData] = useState(boardgames);

  const [filters, setFilters] = useState(filterListData);

  const handleFilterBoardGames = (category) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === "All") {
      setData(boardgames);
      return;
    }

    setData(boardgames.filter((boardgame) => boardgame.category === category));
  };

  const [text, setText] = useState("");
  const handleSearchBoardGames = (e) => {
    setData(
      boardgames.filter((boardgame) =>
        boardgame.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setText(e.target.value);
  };

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => handleFilterBoardGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                value={text}
                placeholder="Search"
                onChange={handleSearchBoardGames}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((boardgame) => (
            <BoardGameCard key={boardgame.id} boardgame={boardgame} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
