import React from "react";
import logo from '../../assets/tech-logo.png';

export default function FooterBottom() {
  return (
    <section className="footer58-bottom">
      <small>
        Designed and Developed by <img src={logo} alt="" />
      </small>

      <small>
        © All rights are reserved by <img src={logo} alt="" />
      </small>

      <button
        className="footer58-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </section>
  );
}
