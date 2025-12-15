import React from "react";

export default function FooterInfoCard({ icon, title, content }) {
  return (
    <address className="footer58-box">
      <img src={icon} alt={title} className="footer58-icon" />
      <h4>{title}</h4>
      <p>{content}</p>
    </address>
  );
}
