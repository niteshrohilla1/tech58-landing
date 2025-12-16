import { useState } from "react";
import PrivacyPolicyModal from '../pages/Policy';
import TermAndConditionModal from "../TermAndConditionModel/TermAndConditionModel";

export default function FooterLinks() {
  const [openPolicy, setOpenPolicy] = useState(false);
  const [openTermCondition, setOpenTermCondition] = useState(false);

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
    <>
      <section className="footer58-links">
        <nav>
          <h5>About</h5>
          <ul>
            <li><a onClick={() => scrollTo("about")}>About Us</a></li>
            <li><a onClick={() => scrollTo("contact-section", true)}>Contact Us</a></li>
            <li><a href="/">Career</a></li>
          </ul>
        </nav>

        <nav>
          <h5>Help</h5>
          <ul>
            <li><a href="/">FAQ</a></li>
          </ul>
        </nav>

        <nav>
          <h5>Legal</h5>
          <ul>
            <li>
              <button className="policy-link" onClick={() => setOpenTermCondition(true)}>
                Terms & Conditions
              </button>
            </li>
            <li>
              <button className="policy-link" onClick={() => setOpenPolicy(true)}>
                Privacy Policy
              </button>
            </li>
          </ul>
        </nav>
      </section>

      {openPolicy && <PrivacyPolicyModal onClose={() => setOpenPolicy(false)} />}
      {openTermCondition && <TermAndConditionModal onClose={() => setOpenTermCondition(false)} />}
    </>
  );
}
