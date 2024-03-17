import React from "react";

function NavListItem({ item, navOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => navOnClick(item.id, item.target)}
      >
        <i className={item.icon}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

export default NavListItem;
