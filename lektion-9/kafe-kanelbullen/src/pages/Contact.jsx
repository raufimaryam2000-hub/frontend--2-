// ✅ KLAR – men sidan syns inte förrän du har lagt till en route för "/kontakt".
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-title">Kontakt</h1>
      <p>📍 Storgatan 1, 123 45 Kanelstad</p>
      <p>📞 012-345 67 89</p>
      <p>✉️ hej@kanelbullen.se</p>
    </section>
  );
}
