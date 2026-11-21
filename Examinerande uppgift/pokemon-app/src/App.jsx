import { useState } from "react";
import PokemonApplication from "./PokemonApplication";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started && (
        <button onClick={() => setStarted(true)}>Start Pokemon App</button>
      )}
      {started && <PokemonApplication />}
    </div>
  );
} 