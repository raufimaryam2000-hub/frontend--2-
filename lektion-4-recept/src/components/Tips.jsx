function Tips() {
  const tip = "Servera med en grönsallad";

  return (
    <article>
      <h2>Fler recept</h2>
      <a href="https://www.ica.se/recept/" target="_blank" rel="noreferrer">ICA</a><br />
      <a href="https://www.coop.se/recept/" target="_blank" rel="noreferrer">Coop</a><br />
      <a href="https://www.arla.se/recept/" target="_blank" rel="noreferrer">Arla</a>
      <p>{tip}</p>
    </article>
  );
}

export default Tips; 