import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDisplay({ weatherData }) {
  return (
    <div className="WeatherDisplay">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start">
            <WeatherTemperature temp={weatherData.temperature} />

            <figure className="fig-icon-sky">
              <WeatherIcon code={weatherData.icon} size={66} />
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
