import { useNavigate } from "react-router-dom";
import Pokeball from "../Pokeball/Pokeball.jsx";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function MainContainer({ initialPokemonId, onModalClose }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Pokedex</h1>

      <Pokeball
        initialPokemonId={initialPokemonId}
        onModalClose={onModalClose}
      />

      <Fab
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#ff5350",
          color: "white",
          "&:hover": {
            backgroundColor: "#ff3d3a",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            lineHeight: 0,
          },
        }}
        onClick={() => navigate("/addPokemon")}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default MainContainer;
