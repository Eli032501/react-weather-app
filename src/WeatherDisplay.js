import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherDisplay({ weatherData }) {
  return (
    <div className="WeatherDisplay">
      <div className="container">
        <div className="d-md-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <div className="div-current-temp d-flex justify-content-start">
              <h2 className="temp-value">
                {Math.round(weatherData.temperature)}
              </h2>
              <div className="temp-units float-start">
                <span>ºC</span> | <span>ºF</span>
              </div>
            </div>
            <figure className="fig-icon-sky">
              <img src={weatherData.icon} alt={weatherData.sky} />
            </figure>
          </div>
          <div className="city-info">
            <h3>{weatherData.city}</h3>
            <h4>
              <FormatDate currentDate={weatherData.date} />
            </h4>
            <p>
              humidity: <span>{weatherData.humidity}% </span> wind:{" "}
              <span>{weatherData.wind} km/h</span> {weatherData.sky}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
