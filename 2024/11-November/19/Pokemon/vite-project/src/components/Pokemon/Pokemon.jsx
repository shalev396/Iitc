import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "./Pokemon.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Pokemon = ({ name, url }) => {
  const colors = [
    { color: "green", code: "#48d1b1" },
    { color: "red", code: "#fa6e6b" },
    { color: "blue", code: "#75bdfd" },
    { color: "yellow", code: "#ffe766" },
    { color: "white", code: "#d3d3d3" },
    { color: "brown", code: "#8b4513" },
    { color: "purple", code: "#9370db" },
  ];

  const getColorCode = (color) => {
    const colorObj = colors.find((c) => c.color === color);
    return colorObj ? colorObj.code : "#000000";
  };

  const [pokemon, setPokemon] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      const [speciesData, spriteData] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon/${data.id}`),
      ]);
      console.log(spriteData.data);

      setPokemon({
        ...data,
        color: speciesData.data.color.name,
        gif: spriteData.data.sprites.other.showdown.front_default,
      });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = pokemon
    ? {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        height: 300,
        overflowY: "auto",
        bgcolor: getColorCode(pokemon.color),
        border: "2px solid #000",
        boxShadow: 24,
        padding: "16px",
      }
    : {};
  function addToFavorites(pok) {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      localStorage.setItem("favorites", JSON.stringify([pok.id]));
    } else {
      if (favorites.includes(pok.id)) {
        localStorage.setItem(
          "favorites",
          JSON.stringify(favorites.splice(favorites.indexOf(pok.id) - 1, 1))
        );
      } else {
        favorites.push(pok.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    }
    console.log(favorites);
  }

  return (
    pokemon && (
      <div
        onClick={handleOpen}
        className={styles.card}
        style={{ backgroundColor: getColorCode(pokemon.color) }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              style={{ float: "left" }}
            >
              ✖
            </button>
            <button
              style={{ float: "right" }}
              onClick={() => addToFavorites(pokemon)}
            >
              ♡,❤︎
            </button>
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
              <li>
                Moves:
                <ul>
                  {pokemon.moves.slice(0, 10).map((move) => (
                    <li key={move.move.name}>{move.move.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <img
              style={{ float: "right", width: "150px", height: "150px" }}
              src={pokemon.gif}
              alt={`${name} gif`}
            />
          </Box>
        </Modal>

        <h1 className={styles.title}>{name}</h1>
        <ul className={styles.ul}>
          {pokemon.abilities.map(({ ability }) => (
            <li className={styles.li} key={ability.name}>
              {ability.name}
            </li>
          ))}
        </ul>
        <div className={styles.side}>
          <img className={styles.front} src={pokemon.gif} alt={`${name} gif`} />
          <img
            className={styles.back}
            src="./icons8-pokeball-50.png"
            alt="Pokéball"
          />
        </div>
      </div>
    )
  );
};

export default Pokemon;
