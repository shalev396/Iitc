import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Pokemon.module.css";

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
    for (let i = 0; i < colors.length; i++) {
      if (color === colors[i].color) {
        return colors[i].code;
      }
    }
    return;
  };
  const [pokemon, setPokemon] = useState(null);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      // console.log(data);
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${data.id}`
      );
      data.color = res.data.color.name;
      console.log(data.color);

      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    pokemon && (
      <div
        className={styles.card}
        style={{ backgroundColor: getColorCode(pokemon.color) }}
      >
        {/* add bg and bgc */}
        <h1 className={styles.title}>{name}</h1>
        {/* <div> */}
        <ul className={styles.ul}>
          {pokemon.abilities.map(({ ability }) => (
            <li className={styles.li} key={ability.name}>
              {ability.name}
            </li>
          ))}
        </ul>
        {/* </div> */}
        <div className={styles.side}>
          <img className={styles.front} src={pokemon.sprites.front_default} />
          <img
            className={styles.back}
            src="./icons8-pokeball-50.png"
            alt="ball"
          />
        </div>
      </div>
    )
  );
};

export default Pokemon;
