import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="info-card">
        <h1>Олександр Петрович</h1>
        <p className="title">Full Stack Developer</p>
        <p>
          <strong>Телефон:</strong> +380 66 123 4567
        </p>
        <p>
          <strong>Email:</strong> example@example.com
        </p>
        <p>
          <strong>Локація:</strong> Київ, Україна
        </p>
        <p>
          <strong>Досвід роботи:</strong> 5 років
        </p>
        <p>
          <strong>Навички:</strong> JavaScript, React, Node.js, HTML, CSS
        </p>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/example"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/example" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
