import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sky: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="mb-5 row justify-content-between">
            <input
              className="input-text "
              type="text"
              placeholder="Enter a city"
            />
            <input
              className="btn w-25 input-btn"
              type="submit"
              value="Search"
            />
          </div>

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
              <h4>Tuesday, 21 may 2024 | 12:48</h4>
              <p>
                humidity: <span>{weatherData.humidity}% </span> wind:{" "}
                <span>{weatherData.wind} km/h</span> {weatherData.sky}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let userInput = "Lisbon";
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
