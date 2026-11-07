import { useState } from "react";
import Profil from "./Profil";
import "./App.css";

const personer = [
  { fornamn: "Anna", efternamn: "Andersson", alder: 28, hobby: "Löpning" },
  { fornamn: "Bo", efternamn: "Berg", alder: 34, hobby: "Fotografi" },
  { fornamn: "Cecilia", efternamn: "Carlsson", alder: 22, hobby: "Gitarr" },
  { fornamn: "David", efternamn: "Dahl", alder: 41, hobby: "Schack" },
  { fornamn: "Elin", efternamn: "Ek", alder: 30, hobby: "Bakning" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light mode" : "Dark mode"}
      </button>

      <h1>Profiler</h1>

      {personer.map((person, index) => (
        <Profil key={index} person={person} />
      ))}
    </div>
  );
}

export default App;  