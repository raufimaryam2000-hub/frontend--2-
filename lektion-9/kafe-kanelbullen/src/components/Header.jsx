import "./Header.css";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <p className="logo">☕ Kafé Kanelbullen</p>

      <nav className="nav">
        <Link to="/" className="link">Hem</Link>
        <Link to="/meny" className="link">Meny</Link>
        <Link to="/om-oss" className="link">Om oss</Link>
        <Link to="/kontakt" className="link">Kontakt</Link> 
      </nav>
    </header>
  );
}
