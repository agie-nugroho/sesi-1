import React from "react";
import "./experience.css";
import Education from "./Education";
import Skills from "./Skills";
const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience and Skills</h2>
      <span className="section__subtitle">Time and Level</span>

      <div className="experience__container container grid">
        <Education />
        <Skills />
      </div>
    </section>
  );
};

export default Experience;
