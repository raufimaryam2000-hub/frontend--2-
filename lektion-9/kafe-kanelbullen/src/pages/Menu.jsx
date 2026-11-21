// ✅ KLAR – men sidan syns inte förrän du har lagt till en route för "/meny".
import { menu } from "../data/menu.js";
import "./Menu.css";

export default function Menu() {
  return (
    <section>
      <h1 className="menu-title">Meny</h1>

      <ul className="menu-grid">
        {menu.map((item) => (
          <li key={item.id} className="menu-card">
            <span className="menu-emoji">{item.emoji}</span>
            <h2 className="menu-name">{item.name}</h2>
            <p className="menu-price">{item.price} kr</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
