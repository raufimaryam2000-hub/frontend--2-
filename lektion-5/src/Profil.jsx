import { useState } from "react";

function Profil({ person }) {
  const [visaMer, setVisaMer] = useState(false);

  return (
    <div className="profil">
      <h2>{person.fornamn}</h2>

      <button onClick={() => setVisaMer(!visaMer)}>
        {visaMer ? "Show less" : "Show more"}
      </button>

      {visaMer && (
        <div className="info">
          <p>Förnamn: {person.fornamn}</p>
          <p>Efternamn: {person.efternamn}</p>
          <p>Ålder: {person.alder}</p>
          <p>Hobby: {person.hobby}</p>
        </div>
      )}
    </div>
  );
}

export default Profil; 