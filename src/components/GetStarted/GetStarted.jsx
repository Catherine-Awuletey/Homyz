import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <butoon className="button">
            <a href="mailto:tech.cattiecodes@gmail.com" className="href">Get Started</a>
          </butoon>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
