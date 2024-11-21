import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Articles from "./components/Articles/articles.jsx";
import Tech from "./components/Articles/Tech/Tech.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="news" element={<h2>news</h2>} />
            <Route path="politics" element={<h2>politics</h2>} />
            <Route path="tech/:id" element={<Tech />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
