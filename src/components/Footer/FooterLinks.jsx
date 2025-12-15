export default function FooterLinks() {
  const scrollTo = (id, shake = false) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });

    if (shake) {
      el.classList.add("shake");
      setTimeout(() => el.classList.remove("shake"), 500);
    }
  };

  return (
    <section className="footer58-links">
      <nav>
        <h5>About</h5>
        <ul>
          <li>
            <a onClick={() => scrollTo("about")}>About Us</a>
          </li>
          <li>
            <a onClick={() => scrollTo("contact-section", true)}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
        </ul>
      </nav>

      <nav>
        <h5>Help</h5>
        <ul>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </nav>

      <nav>
        <h5>Legal</h5>
        <ul>
          <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </nav>
    </section>
  );
}
