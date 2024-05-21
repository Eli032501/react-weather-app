import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="mb-5 row justify-content-between">
          <input
            className="input-text "
            type="text"
            placeholder="Enter a city"
          />
          <input className="btn w-25 input-btn" type="submit" value="Search" />
        </div>

        <div className="d-md-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <div className="div-current-temp d-flex justify-content-start">
              <h2 className="temp-value">18</h2>
              <div className="temp-units float-start">
                <span>ºC</span> | <span>ºF</span>
              </div>
            </div>
            <figure className="fig-icon-sky">
              <img
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                alt="sky-icon"
              />
            </figure>
          </div>
          <div className="city-info">
            <h3>Ghent</h3>
            <h4>Tuesday, 21 may 2024 | 12:48</h4>
            <p>
              humidity: <span>74% </span> wind: <span>4 km/h</span> light rain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
