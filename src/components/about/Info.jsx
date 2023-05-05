import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">12+ Years Studying</span>
      </div>

      <div className="about__box">
        <i class="bx bx-list-ol about__icon"></i>

        <h3 className="about__title">Hobby</h3>
        <span className="about__subtitle">Basketball, Eating, math & Coding</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
