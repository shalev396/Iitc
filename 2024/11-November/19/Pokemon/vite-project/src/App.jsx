import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import Components

import Pokeball from "./components/Pokeball/Pokeball.jsx";
import AddPokemon from "./components/AddPokemon/AddPokemon.jsx";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddPokemon = (newPokemon) => {
    // The AddPokemon component will handle saving to localStorage
    // You might want to refresh the Pokeball component here
  };

  return (
    <>
      <h1>Pokedex</h1>

      <Pokeball />

      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        onClick={() => setIsAddDialogOpen(true)}
      >
        <AddIcon />
      </Fab>

      <AddPokemon
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onAdd={handleAddPokemon}
      />
    </>
  );
}

export default App;
