import emp1 from '../../assets/About/empower-01.png';
import emp2 from '../../assets/About/empower-02.png';
import emp3 from '../../assets/About/empower-03.png';

export default function About() {
  return (
    <section className="collage-container">
      <div className="collage-text">
        <div className="title-deco">
          <span className="blue"></span>
          <span className="red"></span>
        </div>

        <h2>Empowering Your Business for Success</h2>

        <p>
          At Tech58, we're dedicated to empowering businesses for success.
          Our suite of cutting-edge software solutions is designed to streamline
          your operations and drive growth. From HR management to task organization
          and bookkeeping, our integrated SaaS-based products provide a complete
          solution tailored to your needs. With a focus on efficiency and seamless
          integration, our tools optimize processes, boost productivity, and fuel
          business growth. Partner with us and experience the transformative power
          of Tech58.
        </p>
      </div>
      <div className="collage-images">
        <img src={emp3} alt="Decoration 1" className="img img-top-left" />
        <img src={emp2} alt="Decoration 2" className="img img-top-right" />
        <img src={emp1} alt="Main collage image" className="img img-bottom" />
      </div>

    </section>
  );
}
