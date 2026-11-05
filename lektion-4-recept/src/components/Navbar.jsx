// KRAV: Returnera en <nav> med tre länkar: Hem, Recept, Kontakt (href="#")
// EXTRA: Länktexterna ligger i en array och skrivs ut med .map()

// 1. Arrayen med länktexter (utanför funktionen)
const links = ["Hem", "Recept", "Kontakt"];

// 2. Komponenten Navbar (börjar med stor bokstav)
function Navbar() {
  return (
    <nav>
      {/* map går igenom arrayen och skapar en <a> för varje text */}
      {links.map((link) => (
        <a key={link} href="#">
          {link}
        </a>
      ))}
    </nav>
  );
}

// 3. Gör komponenten tillgänglig för andra filer
export default Navbar;  