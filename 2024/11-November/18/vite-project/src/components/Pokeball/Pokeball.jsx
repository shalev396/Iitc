import axios from "axios";
import { useState, useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";
import styles from "./Pokeball.module.css";

const Pokeball = () => {
  const [pokemons, setPokemons] = useState([]);
  const fetchData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      setPokemons(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mains}>
      <ul className={styles.ul}>
        {pokemons.map((pokemon) => {
          return (
            <li className={styles.li} key={pokemon.name}>
              <Pokemon name={pokemon.name} url={pokemon.url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pokeball;
