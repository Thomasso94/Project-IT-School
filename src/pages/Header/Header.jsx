import React, { useContext } from "react";
import "./header.css";
import { AppContext } from "../../App";

function Header({ toggleActive }) {
  const { favourite, bag } = useContext(AppContext);
  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders2-vertical"></i>
      </a>
      <div className="headerItems">
        <a href="#" className="icon">
          <i className="bi bi-bag-heart-fill"></i>
          <span className="favourite">{favourite.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-plus-fill"></i>
          <span className="shoppingBag">{bag.length}</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
