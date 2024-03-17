import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import "./App.css";
import Main from "./pages/Main/Main";

export const AppContext = React.createContext();

function App() {
  const [favourite, setFavourite] = useState([]);
  const [bag, setBag] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ favourite, setFavourite, bag, setBag }}>
        <Main />
      </AppContext.Provider>
    </>
  );
}

export default App;
