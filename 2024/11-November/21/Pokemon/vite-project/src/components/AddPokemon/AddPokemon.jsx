import { useState } from "react";
import { useNavigate } from "react-router-dom";
//useState to manage state (react)
//useNavigate to navigate to different page (react-router-dom)

import styles from "./AddPokemon.module.css";

function AddPokemon() {
  //navigate
  const navigate = useNavigate();
  //state for form
  const [formData, setFormData] = useState({
    name: "",
    types: [""],
    stats: [
      { stat: { name: "hp" }, base_stat: "" },
      { stat: { name: "attack" }, base_stat: "" },
      { stat: { name: "defense" }, base_stat: "" },
      { stat: { name: "special-attack" }, base_stat: "" },
      { stat: { name: "special-defense" }, base_stat: "" },
      { stat: { name: "speed" }, base_stat: "" },
    ],
    abilities: [""],
    height: "",
    weight: "",
    base_experience: "",
    sprites: {
      other: {
        showdown: {
          front_default: "",
        },
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (!formData.name || !formData.types[0]) {
      alert("Name and at least one type are required!");
      return;
    }

    // new Pokemon with structure
    const newPokemon = {
      ...formData,
      id: `custom-${Date.now()}`,
      url: `custom-${Date.now()}`,
      types: formData.types.filter((type) => type.trim() !== ""),
      abilities: formData.abilities.filter((ability) => ability.trim() !== ""),
      stats: formData.stats.map((stat) => ({
        stat: { name: stat.stat.name },
        base_stat: parseInt(stat.base_stat) || 0,
      })),
      color: "white",
      sprites: {
        other: {
          showdown: {
            front_default:
              formData.sprites.other.showdown.front_default ||
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
          },
        },
      },
    };

    // Get existing Pokemon
    const existingPokemons =
      JSON.parse(localStorage.getItem("customPokemons")) || [];

    // Save to localStorage
    localStorage.setItem(
      "customPokemons",
      JSON.stringify([...existingPokemons, newPokemon])
    );

    // Navigate back to home
    navigate("/");
  };

  const handleTypeChange = (index, value) => {
    const newTypes = [...formData.types];
    newTypes[index] = value;
    setFormData({ ...formData, types: newTypes });
  };
  const addType = () => {
    if (formData.types.length < 2) {
      setFormData({ ...formData, types: [...formData.types, ""] });
    }
  };

  const handleAbilityChange = (index, value) => {
    const newAbilities = [...formData.abilities];
    newAbilities[index] = value;
    setFormData({ ...formData, abilities: newAbilities });
  };

  const addAbility = () => {
    setFormData({ ...formData, abilities: [...formData.abilities, ""] });
  };

  return (
    <div className={styles.container}>
      <h1>Add New Pokemon</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
            required
          />
        </div>

        {/* Types */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Types:</label>
          {formData.types.map((type, index) => (
            <input
              key={index}
              type="text"
              value={type}
              onChange={(e) => handleTypeChange(index, e.target.value)}
              className={styles.input}
              required={index === 0}
            />
          ))}
          {formData.types.length < 2 && (
            <button
              type="button"
              onClick={addType}
              className={styles.addButton}
            >
              Add Type
            </button>
          )}
        </div>

        {/* Stats */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Stats:</label>
          {formData.stats.map((stat, index) => (
            <div key={index} className={styles.statInput}>
              <label>{stat.stat.name}:</label>
              <input
                type="number"
                value={stat.base_stat}
                onChange={(e) => {
                  const newStats = [...formData.stats];
                  newStats[index].base_stat = e.target.value;
                  setFormData({ ...formData, stats: newStats });
                }}
                className={styles.input}
                min="1"
                max="255"
              />
            </div>
          ))}
        </div>

        {/* Abilities */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Abilities:</label>
          {formData.abilities.map((ability, index) => (
            <input
              key={index}
              type="text"
              value={ability}
              onChange={(e) => handleAbilityChange(index, e.target.value)}
              className={styles.input}
            />
          ))}
          <button
            type="button"
            onClick={addAbility}
            className={styles.addButton}
          >
            Add Ability
          </button>
        </div>

        {/* Other Stats */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Height:</label>
          <input
            type="number"
            value={formData.height}
            onChange={(e) =>
              setFormData({ ...formData, height: e.target.value })
            }
            className={styles.input}
            min="1"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Weight:</label>
          <input
            type="number"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
            className={styles.input}
            min="1"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Base Experience:</label>
          <input
            type="number"
            value={formData.base_experience}
            onChange={(e) =>
              setFormData({ ...formData, base_experience: e.target.value })
            }
            className={styles.input}
            min="1"
          />
        </div>

        {/* Image URL */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Image URL:</label>
          <input
            type="url"
            value={formData.sprites.other.showdown.front_default}
            onChange={(e) =>
              setFormData({
                ...formData,
                sprites: {
                  ...formData.sprites,
                  other: {
                    ...formData.sprites.other,
                    showdown: {
                      ...formData.sprites.other.showdown,
                      front_default: e.target.value,
                    },
                  },
                },
              })
            }
            className={styles.input}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Add Pokemon
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPokemon;
