import React from "react";
import "./HR58Section.css";

import mainImg from "../../assets/hr/banner01.png";
import card1 from "../../assets/hr/banner01-01.png";
import card2 from "../../assets/hr/banner01-02.png";
import card3 from "../../assets/hr/banner01-03.png"; // added 3rd card (change filename if different)
import pattern from "../../assets/hr/pattern02.png";
import hrLogo from "../../assets/hr/hr58-logo.svg";
import icon1 from "../../assets/hr/icon-streamlined.svg";
import icon2 from "../../assets/hr/icon-attendance.svg";

export default function HR58Section() {
  return (
    <section className="hr58-container">
      <div className="hr58-inner">
        <div className="hr58-left">
          <img src={hrLogo} className="hr58-logo" alt="hr58 logo" />

          <div className="hr58-divider">
            <span className="blue" />
            <span className="red" />
          </div>

          <h2 className="hr58-title">Simplifying HR<br />Management</h2>

          <div className="hr58-feature">
            <img src={icon1} alt="icon" className="hr58-icon" />
            <div>
              <h4>Streamlined Employee Data Management</h4>
              <p>
                From personal details and performance reviews to benefits and
                leave tracking.
              </p>
            </div>
          </div>

          <div className="hr58-feature">
            <img src={icon2} alt="icon" className="hr58-icon" />
            <div>
              <h4>Efficient Time and Attendance</h4>
              <p>
                Easily track and manage attendance, leaves, and time-off ensuring
                accurate payroll.
              </p>
            </div>
          </div>
        </div>

        <div className="hr58-right" style={{ backgroundImage: `url(${pattern})` }}>
          <div className="hr58-main-wrapper" aria-hidden={false}>
            <img src={mainImg} className="hr58-main-img" alt="main dashboard" />

            {/* Cards that pop on hover (initially hidden) */}
            <img src={card1} className="hr58-card card-1" alt="card1" />
            <img src={card2} className="hr58-card card-2" alt="card2" />
            <img src={card3} className="hr58-card card-3" alt="card3" />
          </div>
        </div>
      </div>
    </section>
  );
}
