import MainContainer from "./components/MainContainer/MainContainer.jsx";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AddPokemonPage from "./components/AddPokemon/AddPokemon";

// Create a wrapper component for the single Pokemon view
function SinglePokemonWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <MainContainer initialPokemonId={id} onModalClose={() => navigate("/")} />
  );
}

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
          <Route path="/singlePokemon/:id" element={<SinglePokemonWrapper />}>
            <Route path="stats" element={<h2>stats</h2>} />
            <Route path="abilities" element={<h2>abilities</h2>} />
            <Route path="moves" element={<h2>moves</h2>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
