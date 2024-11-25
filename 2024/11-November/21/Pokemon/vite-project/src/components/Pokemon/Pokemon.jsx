import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
//  useNavigate: Provides navigation function to change pages (react-router-dom)
//  useLocation: Gets current URL location information (react-router-dom)
//  useState: Manages component state (react)
//  useEffect: Runs code when component loads or specific values change (react)

//mui
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//styles
import styles from "./Pokemon.module.css";

// Props:
//  name
//  url:Pokemon data
//  customPokemon: Custom Pokemon data object
//  isOpen: modal state
//  onClose: Modal
//  modalView: used in modal view

function Pokemon({
  name,
  url,
  customPokemon,
  isOpen: initialIsOpen,
  onClose,
  modalView,
}) {
  // Navigation
  const navigate = useNavigate();
  const location = useLocation();

  // State Management
  const [pokemon, setPokemon] = useState(null); // Pokemon data
  const [open, setOpen] = useState(initialIsOpen || false); // modal state
  const [isFavorite, setIsFavorite] = useState(false); // favorite status
  const [pokemonColor, setPokemonColor] = useState("white"); // card color

  const colors = [
    { color: "green", code: "#48d1b1" },
    { color: "red", code: "#fa6e6b" },
    { color: "blue", code: "#75bdfd" },
    { color: "yellow", code: "#ffe766" },
    { color: "white", code: "#d3d3d3" },
    { color: "brown", code: "#8b4513" },
    { color: "purple", code: "#9370db" },
    { color: "pink", code: "#ffa6c9" },
    { color: "gray", code: "#b7b7ce" },
    { color: "black", code: "#6c6c6c" },
  ];

  //  color to hex code
  const getColorCode = (color) => {
    const colorObj = colors.find((c) => c.color === color);
    return colorObj ? colorObj.code : "#d3d3d3"; // defaults to light gray
  };

  // Pokemon card click
  const handleOpen = () => {
    if (!modalView) {
      const id = customPokemon ? customPokemon.id : url.split("/")[6];
      navigate(`/singlePokemon/${id}`);
    } else {
      setOpen(true);
    }
  };

  // modal closing
  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  //Fetches Pokemon details
  useEffect(() => {
    const fetchData = async () => {
      if (customPokemon) {
        setPokemon({
          ...customPokemon,
          gif: customPokemon.sprites?.other?.showdown?.front_default,
          moves: [],
        });
        setPokemonColor(customPokemon.color || "white");
      } else {
        try {
          const [pokemonResponse, speciesResponse] = await Promise.all([
            axios.get(url),
            axios.get(
              `https://pokeapi.co/api/v2/pokemon-species/${url.split("/")[6]}/`
            ),
          ]);

          setPokemon({
            ...pokemonResponse.data,
            gif: pokemonResponse.data.sprites.other.showdown.front_default,
          });
          setPokemonColor(speciesResponse.data.color.name);
        } catch (error) {
          console.error("Error fetching Pokemon:", error);
        }
      }
    };

    fetchData();
  }, [url, customPokemon]);

  //Checks favorites
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const pokemonId = customPokemon ? customPokemon.id : url.split("/")[6];
    setIsFavorite(favorites.includes(pokemonId));
  }, [url, customPokemon]);

  //  - Updates localStorage
  //  - Updates UI state
  const toggleFavorite = (e) => {
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const pokemonId = customPokemon ? customPokemon.id : url.split("/")[6];

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((id) => id !== pokemonId);
    } else {
      newFavorites = [...favorites, pokemonId];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  // Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    maxHeight: "90vh",
    overflowY: "auto",
    bgcolor: getColorCode(pokemonColor),
    border: "2px solid #000",
    borderRadius: "12px",
    boxShadow: 24,
    padding: "16px",
  };

  // type name
  const getTypeName = (typeObj) => {
    if (customPokemon) {
      return typeObj.type?.name || typeObj;
    }
    return typeObj.type?.name || "unknown";
  };

  // Render Component
  return (
    pokemon && (
      <div
        onClick={handleOpen}
        className={styles.card}
        style={{ backgroundColor: getColorCode(pokemonColor) }}
      >
        <div className={styles.cardContent}>
          <h1 className={styles.title}>{pokemon.name}</h1>
          <div className={styles.types}>
            {Array.isArray(pokemon.types) &&
              pokemon.types.map((typeObj, index) => (
                <span key={index} className={styles.type}>
                  {getTypeName(typeObj)}
                </span>
              ))}
          </div>
          <div className={styles.side}>
            <img
              className={styles.front}
              src={
                pokemon.sprites?.other?.showdown?.front_default || pokemon.gif
              }
              alt={`${pokemon.name} sprite`}
              loading="lazy"
            />
          </div>
          <div className={styles.stats}>
            {pokemon.stats && pokemon.stats[0] && (
              <div className={styles.stat}>
                HP: {pokemon.stats[0].base_stat}
              </div>
            )}
          </div>
          <button
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.active : ""
            }`}
            onClick={toggleFavorite}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.modalHeader}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className={styles.closeButton}
              >
                ✖
              </button>
              <button
                className={`${styles.favoriteButton} ${
                  isFavorite ? styles.active : ""
                }`}
                onClick={toggleFavorite}
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {pokemon.name}
            </Typography>
            <ul>
              <li>
                Types:
                <ul>
                  {Array.isArray(pokemon.types) &&
                    pokemon.types.map((typeObj, index) => (
                      <li key={index}>{getTypeName(typeObj)}</li>
                    ))}
                </ul>
              </li>
              <li>
                Stats:
                <ul>
                  {pokemon.stats.map((stat, index) => (
                    <li key={index}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                Abilities:
                <ul>
                  {pokemon.abilities.map((abilityObj, index) => (
                    <li key={index}>
                      {abilityObj.ability?.name || abilityObj.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li>Base Experience: {pokemon.base_experience}</li>
              <li>Weight: {pokemon.weight}</li>
              <li>Height: {pokemon.height}</li>
              {pokemon.moves && pokemon.moves.length > 0 && (
                <li>
                  Moves:
                  <ul>
                    {pokemon.moves.slice(0, 10).map((move, index) => (
                      <li key={index}>{move.move?.name || move.name}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
            <img
              style={{ float: "right", width: "150px", height: "150px" }}
              src={pokemon.gif}
              alt={`${pokemon.name} gif`}
            />
          </Box>
        </Modal>
      </div>
    )
  );
}
export default Pokemon;
