import React from "react";
import FooterInfoCard from "./FooterInfoCard";
import office from '../../assets/Footer/icon-office.png';
import clock from '../../assets/Footer/clock.svg';
import calling from '../../assets/Footer/phone-calling.svg';
import mail from '../../assets/Footer/mail.svg';
import phone from '../../assets/Footer/phone-call.svg';


const infoData = [
  {
    icon: office,
    title: "OFFICE ADDRESS",
    content: (
      <>
        <strong>TECH58 PRIVATE LIMITED</strong><br />
        #UG-7, Ansal Chambers-1,<br />
        Bhikaji Cama Place,<br />
        New Delhi - 110066
      </>
    )
  },
  {
    icon: clock,
    title: "WORKING HOURS",
    content: (
      <>
        Monday to Friday<br />
        Timing: 10:00AM - 5:00PM
      </>
    )
  },
  {
    icon: calling,
    title: "CONTACT US",
    content: (
      <>
        <a href="mailto:info@tech58.in">
          <img src={mail} alt="mail icon" />
          info@tech58.in</a><br />
        <a href="tel:+919441000058">
          <img src={phone} alt="phone icon" />
          +91 9441000058</a>
      </>
    )
  }
];

export default function FooterInfoRow() {
  return (
    <section className="footer58-info" id="contact-section">
      {infoData.map((item, i) => (
        <React.Fragment key={i}>
          <FooterInfoCard {...item} />
          {i !== infoData.length - 1 && <span className="footer58-divider" />}
        </React.Fragment>
      ))}
    </section>
  );
}

