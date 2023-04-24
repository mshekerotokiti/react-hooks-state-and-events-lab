import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {


  // replace 'false' with a state variable that can be toggled between true and false
  const [isDarkMode,setIsDarkMode]=useState(false)
  // this will be used for the Dark Mode Toggle feature
  function handleButton(){
    setIsDarkMode((isDarkMode)=> !isDarkMode)

  }
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButton}>{isDarkMode ? "App dark" : "App light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
