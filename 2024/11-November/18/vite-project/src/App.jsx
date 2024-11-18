import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import Components

import Pokeball from "./components/Pokeball/Pokeball.jsx";

function App() {
  return (
    <>
      <h1>Pokedex</h1>

      <Pokeball />
    </>
  );
}

export default App;
