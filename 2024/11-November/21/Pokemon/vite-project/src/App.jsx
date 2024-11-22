//costoms componments
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";
import AddPokemonPage from "./components/AddPokemon/AddPokemon";
import Pokemon from "./components/Pokemon/Pokemon";
//css
import "./App.css";
//react router
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
//  useParams: Gets URL parameters (like getting "25" from "/pokemon/25") (react-router-dom)
//  useNavigate: Provides navigation function to change pages (react-router-dom)
//react
import { useEffect } from "react";
//  useEffect: Runs code when component loads or specific values change (react)

//  Single Pokemon Page Handler
function SinglePokemonWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isCustomPokemon = id.startsWith("custom-");
  useEffect(() => {
    if (isCustomPokemon) {
      // Get localStorage
      const customPokemons =
        JSON.parse(localStorage.getItem("customPokemons")) || [];
      const pokemon = customPokemons.find((p) => p.id === id);
      if (!pokemon) {
        navigate("/404");
      }
    }
  }, [id, isCustomPokemon, navigate]); // Dependencies array - effect runs when these values change
  // - individual Pokemon = main container and the Pokemon modal
  return (
    <>
      <MainContainer />
      <Pokemon
        url={
          isCustomPokemon
            ? `/custom/${id}`
            : `https://pokeapi.co/api/v2/pokemon/${id}/`
        }
        isOpen={true}
        onClose={() => navigate("/")}
        modalView={true}
        customPokemon={
          isCustomPokemon
            ? (JSON.parse(localStorage.getItem("customPokemons")) || []).find(
                (p) => p.id === id
              )
            : null
        }
      />
    </>
  );
}
// //navbar + routing
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/page/1" replace />} />
          <Route path="/page/:page" element={<MainContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/addPokemon" element={<AddPokemonPage />} />
          <Route path="/singlePokemon/:id" element={<SinglePokemonWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
