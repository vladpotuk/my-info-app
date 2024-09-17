import React from "react";
import "./App.css";

function Info({
  name,
  title,
  phone,
  email,
  location,
  experience,
  skills,
  linkedin,
  github,
}) {
  return (
    <div className="info-card">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p>
        <strong>Телефон:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Локація:</strong> {location}
      </p>
      <p>
        <strong>Досвід роботи:</strong> {experience}
      </p>
      <p>
        <strong>Навички:</strong> {skills}
      </p>
      <div className="social-media">
        <a href={linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Info
        name="Олександр Петрович"
        title="Full Stack Developer"
        phone="+380 66 123 4567"
        email="example@example.com"
        location="Київ, Україна"
        experience="5 років"
        skills="JavaScript, React, Node.js, HTML, CSS"
        linkedin="https://www.linkedin.com/in/example"
        github="https://github.com/example"
      />
    </div>
  );
}

export default App;
