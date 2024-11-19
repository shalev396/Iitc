import axios from "axios";
import { useState, useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";
import styles from "./Pokeball.module.css";

const Pokeball = () => {
  const [pokemons, setPokemons] = useState([]);
  const [customPokemons, setCustomPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const limit = 20;

  // Fetch localStorage
  const fetchCustomPokemons = () => {
    const stored = JSON.parse(localStorage.getItem("customPokemons")) || [];
    setCustomPokemons(stored);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const {
        data: { results },
      } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      );

      setPokemons((prev) => {
        const newPokemons = [...prev];
        results.forEach((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          const exists = newPokemons.some(
            (p) => p.url.split("/")[6] === pokemonId
          );
          if (!exists) {
            newPokemons.push(pokemon);
          }
        });
        return newPokemons;
      });

      setError(null);
    } catch (error) {
      setError("Failed to fetch Pokémon. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCustomPokemons();
  }, [offset]);

  // Add  custom pokemon updates
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "customPokemons") {
        fetchCustomPokemons();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const loadMore = () => {
    setOffset((prev) => prev + limit);
  };

  const toggleFavorites = () => {
    setShowFavoritesOnly((prev) => !prev);
  };

  const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };

  const filteredPokemons = showFavoritesOnly
    ? pokemons.filter((pokemon) => {
        const favorites = getFavorites();
        const pokemonId = parseInt(pokemon.url.split("/")[6]);
        return favorites.includes(pokemonId);
      })
    : pokemons;

  const uniquePokemons = Array.from(
    new Map(
      filteredPokemons.map((pokemon) => [pokemon.url.split("/")[6], pokemon])
    ).values()
  );

  return (
    <div className={styles.mains}>
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${
            showFavoritesOnly ? styles.active : ""
          }`}
          onClick={toggleFavorites}
        >
          {showFavoritesOnly ? "Show All" : "Show Favorites"}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <ul className={styles.ul}>
        {/* Custom Pokemons */}
        {customPokemons.map((pokemon) => (
          <li
            className={`${styles.li} ${styles.customPokemon}`}
            key={`custom-${pokemon.id}`}
          >
            <Pokemon
              name={pokemon.name}
              url={pokemon.url}
              customPokemon={pokemon}
            />
          </li>
        ))}

        {/* API Pokemons */}
        {uniquePokemons.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          return (
            <li
              className={styles.li}
              key={`pokemon-${pokemonId}-${showFavoritesOnly ? "fav" : "all"}`}
            >
              <Pokemon name={pokemon.name} url={pokemon.url} />
            </li>
          );
        })}
      </ul>

      {isLoading && <div className={styles.loading}>Loading...</div>}

      {!showFavoritesOnly && (
        <button
          className={styles.loadMore}
          onClick={loadMore}
          disabled={isLoading}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Pokeball;
