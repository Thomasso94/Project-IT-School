import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../../App";
import "./main.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Categories from "../Categories/Categories";
import MyFavourite from "../MyFavourite/MyFavourite";
import Bag from "../Bag/Bag";

function Main() {
  const { favourite, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [boardgames, setBoardGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const favouriteRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "favourite",
      ref: favouriteRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  };

  // fetch data function
  const fetchData = () => {
    fetch("http://localhost:3000/api/BoardGamesList.json")
      .then((res) => res.json())
      .then((data) => {
        setBoardGames(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`mainContent ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive} />
        <div className="container-fluid">
          {boardgames && boardgames.length > 0 && (
            <>
              <Home boardgames={boardgames} reference={homeRef} />
              <Categories boardgames={boardgames} reference={categoriesRef} />
              <MyFavourite boardgames={favourite} reference={favouriteRef} />
              <Bag boardgames={bag} reference={bagRef} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
