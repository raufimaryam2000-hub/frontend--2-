import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

export default function PokemonApplication() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Kunde inte hämta listan", error);
      }
    }
    fetchPokemons();
  }, []);

  async function handleFetch() {
    if (!selectedUrl) return;
    try {
      const response = await fetch(selectedUrl);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Kunde inte hämta Pokemon", error);
    }
  }

  return (
    <div>
      <select value={selectedUrl} onChange={(e) => setSelectedUrl(e.target.value)}>
        <option value="">Välj Pokemon</option>
        {pokemons.map((p) => (
          <option key={p.name} value={p.url}>
            {p.name}
          </option>
        ))}
      </select>
      <button onClick={handleFetch}>Hämta Pokemon</button>

      {pokemonData && <Pokemon data={pokemonData} />}
    </div>
  );
} 