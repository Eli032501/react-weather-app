import React, { useState } from "react";

export default function WeatherTemperature({ temp }) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit() {
    return (temp * 9) / 5 + 32;
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="div-current-temp d-flex justify-content-start">
        <h2 className="temp-value">{Math.round(temp)}</h2>
        <div className="temp-units float-start">
          <span>ºC </span>|
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="div-current-temp d-flex justify-content-start">
        <h2 className="temp-value">{Math.round(convertFahrenheit())}</h2>
        <div className="temp-units float-start">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{" "}
          |<span> ºF</span>
        </div>
      </div>
    );
  }
}
