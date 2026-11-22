import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Välkommen till Receptboken</h1>
      <p>Här kan du bläddra bland recept och läsa mer om vart och ett.</p>
      <Link className="button" to="/recipes">
        Visa recept
      </Link>
    </div>
  );
}

export default Home;
