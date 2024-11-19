import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./AddPokemon.module.css";

const AddPokemon = ({ open, onClose, onAdd }) => {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    imageUrl: "",
    types: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    abilities: "",
    weight: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const customPokemon = {
      id: `custom-${Date.now()}`,
      name: newPokemon.name,
      sprites: {
        other: {
          showdown: {
            front_default: newPokemon.imageUrl,
          },
        },
      },
      types: newPokemon.types.split(",").map((type) => ({
        type: { name: type.trim() },
      })),
      stats: [
        { base_stat: parseInt(newPokemon.hp), stat: { name: "hp" } },
        { base_stat: parseInt(newPokemon.attack), stat: { name: "attack" } },
        { base_stat: parseInt(newPokemon.defense), stat: { name: "defense" } },
        { base_stat: parseInt(newPokemon.speed), stat: { name: "speed" } },
      ],
      abilities: newPokemon.abilities.split(",").map((ability) => ({
        ability: { name: ability.trim() },
      })),
      weight: parseInt(newPokemon.weight),
      height: parseInt(newPokemon.height),
      isCustom: true,
    };

    // Save to localStorage
    const customPokemons =
      JSON.parse(localStorage.getItem("customPokemons")) || [];
    customPokemons.push(customPokemon);
    localStorage.setItem("customPokemons", JSON.stringify(customPokemons));

    onAdd(customPokemon);
    onClose();
  };

  const handleChange = (e) => {
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Custom Pokémon</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={newPokemon.name}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="Image URL"
            name="imageUrl"
            value={newPokemon.imageUrl}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="Types (comma-separated)"
            name="types"
            value={newPokemon.types}
            onChange={handleChange}
            helperText="Example: fire, flying"
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="HP"
            name="hp"
            type="number"
            value={newPokemon.hp}
            onChange={handleChange}
            required
          />
          {/* Add more fields for attack, defense, etc. */}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add Pokémon
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddPokemon;
