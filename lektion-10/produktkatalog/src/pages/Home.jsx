import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Välkommen till Produktkatalogen</h1>
      <p>Här kan du bläddra bland produkter och läsa mer om var och en.</p>
      <Link className="button" to="/products">
        Visa produkter
      </Link>
    </div>
  );
}

export default Home;
