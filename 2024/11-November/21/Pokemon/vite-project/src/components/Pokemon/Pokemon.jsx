import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "./Pokemon.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Pokemon = ({ name, url, customPokemon, isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pokemonId = url.split("/")[6];
  const [pokemon, setPokemon] = useState(null);
  const [open, setOpen] = useState(isOpen);
  const [isFavorite, setIsFavorite] = useState(false);
  const [pokemonColor, setPokemonColor] = useState("white");

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

  const getColorCode = (color) => {
    const colorObj = colors.find((c) => c.color === color);
    return colorObj ? colorObj.code : "#d3d3d3";
  };

  const fetchData = async () => {
    if (customPokemon) {
      setPokemon({
        ...customPokemon,
        types: Array.isArray(customPokemon.types)
          ? customPokemon.types.map((type) => ({ type: { name: type } }))
          : [{ type: { name: customPokemon.types } }],
        stats: Array.isArray(customPokemon.stats)
          ? customPokemon.stats
          : [{ stat: { name: "hp" }, base_stat: customPokemon.stats }],
        gif: customPokemon.sprites?.other?.showdown?.front_default || "",
      });
      setPokemonColor(customPokemon.color || "white");
    } else {
      try {
        const [pokemonResponse, speciesResponse] = await Promise.all([
          axios.get(url),
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`),
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

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(pokemonId));
  }, [pokemonId]);

  const handleOpen = () => {
    setOpen(true);
    if (location.pathname === "/") {
      navigate(`/singlePokemon/${pokemonId}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id) => id !== pokemonId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(pokemonId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

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

  return (
    pokemon && (
      <div
        onClick={handleOpen}
        className={styles.card}
        style={{ backgroundColor: getColorCode(pokemonColor) }}
      >
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
                className={styles.favoriteButton}
                onClick={toggleFavorite}
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <ul>
              <li>
                Types:
                <ul>
                  {pokemon.types.map(({ type }) => (
                    <li key={type.name}>{type.name}</li>
                  ))}
                </ul>
              </li>
              <li>
                Stats:
                <ul>
                  {pokemon.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                Abilities:
                <ul>
                  {pokemon.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
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
                    {pokemon.moves.slice(0, 10).map((move) => (
                      <li key={move.move.name}>{move.move.name}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
            <img
              style={{ float: "right", width: "150px", height: "150px" }}
              src={pokemon.gif}
              alt={`${name} gif`}
            />
          </Box>
        </Modal>

        <div className={styles.cardContent}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.types}>
            {pokemon.types.map(({ type }) => (
              <span key={type.name} className={styles.type}>
                {type.name}
              </span>
            ))}
          </div>
          <div className={styles.side}>
            <img
              className={styles.front}
              src={pokemon.gif}
              alt={`${name} sprite`}
              loading="lazy"
            />
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              HP: {pokemon.stats.find((s) => s.stat.name === "hp").base_stat}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Pokemon;
