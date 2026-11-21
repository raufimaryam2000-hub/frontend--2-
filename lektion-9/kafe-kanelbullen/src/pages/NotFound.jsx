import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Sidan finns inte</h1>
      <Link to="/">Tillbaka till startsidan</Link>
    </div>
  );
} 