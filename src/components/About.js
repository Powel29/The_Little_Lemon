import React from "react";
import about1 from "../images/about_2.jpg";

import emp1 from "../images/emp1.jpg";
import emp2 from "../images/emp2.jpeg";
import emp3 from "../images/emp3.jpeg";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant founded in
            Chicago. We celebrate traditional recipes with a fresh, modern touch
            — sourcing local ingredients and preparing every dish with care.
          </p>
          <h1>History</h1>
          <p>
            Founded in 2020 by a family with a passion for Mediterranean
            cooking, Little Lemon grew from a small neighborhood eatery into a
            beloved local gathering place. Our recipes are inspired by home
            cooking and refined for the modern table.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={about1} alt="Our restaurant team" />
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <article className="team-card">
            <img src={emp1} alt="Team member" />
            <h3>Jessy</h3>
            <p>Head Chef — recipes from the family kitchen.</p>
          </article>
          <article className="team-card">
            <img src={emp2} alt="Team member" />
            <h3>Maria</h3>
            <p>General Manager — hospitality and events.</p>
          </article>
          <article className="team-card">
            <img src={emp3} alt="Team member" />
            <h3>Grace</h3>
            <p>Pastry Chef — desserts and breads.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
