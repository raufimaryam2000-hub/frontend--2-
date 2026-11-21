import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Hem</Link>
      <Link to="/products">Produkter</Link>
    </nav>
  );
}

export default Navbar;
