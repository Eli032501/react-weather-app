import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Eli032501"
              target="_blank"
              rel="noreferrer"
            >
              Eliana Pereira
            </a>{" "}
            and is on{" "}
            <a
              href="https://github.com/Eli032501/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-weather-forecast-eli.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
