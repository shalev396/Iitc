import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pokemon from "../Pokemon/Pokemon";
import styles from "./Pokeball.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pokeball = ({ initialPokemonId, onModalClose }) => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [customPokemons, setCustomPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPokemonId, setSelectedPokemonId] = useState(initialPokemonId);
  const limit = 20;

  // Add function to get favorite Pokemon IDs
  const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };

  // Fetch specific Pokemon data
  const fetchPokemonData = async (id) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      return {
        name: response.data.name,
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
      };
    } catch (error) {
      console.error(`Error fetching Pokemon ${id}:`, error);
      return null;
    }
  };

  // Modified fetchData to handle favorites
  const fetchData = async () => {
    try {
      setIsLoading(true);

      if (showFavoritesOnly) {
        const favorites = getFavorites();
        const favoritePokemonPromises = favorites.map((id) =>
          fetchPokemonData(id)
        );
        const favoritePokemons = await Promise.all(favoritePokemonPromises);
        setPokemons(favoritePokemons.filter((pokemon) => pokemon !== null));
        setTotalPages(1); // Only one page for favorites
      } else {
        const offset = (parseInt(page) - 1) * limit;
        const countResponse = await axios.get(
          "https://pokeapi.co/api/v2/pokemon"
        );
        const totalCount = countResponse.data.count;
        setTotalPages(Math.ceil(totalCount / limit));

        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        );
        setPokemons(response.data.results);
      }

      setError(null);
    } catch (error) {
      setError("Failed to fetch Pokémon. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCustomPokemons = () => {
    const customPokemonsData =
      JSON.parse(localStorage.getItem("customPokemons")) || [];
    setCustomPokemons(customPokemonsData);
  };

  useEffect(() => {
    fetchData();
    fetchCustomPokemons();
  }, [page, showFavoritesOnly]); // Added showFavoritesOnly as dependency

  useEffect(() => {
    setSelectedPokemonId(initialPokemonId);
  }, [initialPokemonId]);

  const toggleFavorites = () => {
    setShowFavoritesOnly((prev) => !prev);
    if (!showFavoritesOnly) {
      navigate("/page/1"); // Reset to first page when showing favorites
    }
  };

  const handlePageChange = (event, value) => {
    navigate(`/page/${value}`);
  };

  // Filter Pokemon based on favorites
  const filteredPokemons = pokemons.filter((pokemon) => {
    if (showFavoritesOnly) {
      const favorites = getFavorites();
      return favorites.includes(pokemon.url.split("/")[6]);
    }
    return true;
  });

  // Filter custom Pokemon based on favorites
  const filteredCustomPokemons = customPokemons.filter((pokemon) => {
    if (showFavoritesOnly) {
      const favorites = getFavorites();
      return favorites.includes(pokemon.id);
    }
    return true;
  });

  return (
    <div className={styles.mains}>
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterButton} ${
            showFavoritesOnly ? styles.active : ""
          }`}
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
        >
          {showFavoritesOnly ? "Show All" : "Show Favorites"}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <ul className={styles.ul}>
        {/* Custom Pokemons */}
        {filteredCustomPokemons.map((pokemon) => (
          <li
            className={`${styles.li} ${styles.customPokemon}`}
            key={pokemon.id}
          >
            <Pokemon
              name={pokemon.name}
              url={`/custom/${pokemon.id}`}
              customPokemon={pokemon}
              isOpen={selectedPokemonId === pokemon.id}
              onClose={onModalClose}
            />
          </li>
        ))}

        {/* API Pokemons */}
        {filteredPokemons.map((pokemon) => (
          <li className={styles.li} key={pokemon.url.split("/")[6]}>
            <Pokemon
              name={pokemon.name}
              url={pokemon.url}
              isOpen={selectedPokemonId === pokemon.url.split("/")[6]}
              onClose={onModalClose}
            />
          </li>
        ))}
      </ul>

      {isLoading && <div className={styles.loading}>Loading...</div>}

      {!showFavoritesOnly && (
        <Stack spacing={2} className={styles.pagination}>
          <Pagination
            count={totalPages}
            page={parseInt(page)}
            onChange={handlePageChange}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#ff5350",
              },
              "& .Mui-selected": {
                backgroundColor: "#ff5350 !important",
                color: "white",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(255, 83, 80, 0.1)",
              },
            }}
          />
        </Stack>
      )}
    </div>
  );
};

export default Pokeball;
