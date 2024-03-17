import React from "react";
import { useState } from "react";
import "./sideMenu.css";
import navListData from "../../data/navListData";
import NavListItem from "../NavListItem/NavListItem";

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav.id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-dice-6-fill"></i>
        <span className="project-title">BoardgameLand</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem
            key={item.id}
            item={item}
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>
      <ul className="socialMedia">
        <li>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-tiktok"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
