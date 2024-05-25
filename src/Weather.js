import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";

export default function Weather({ defaultCity }) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  function handleResponse(response) {
    setData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sky: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <form
          className="mb-5 row justify-content-between"
          onSubmit={handleSubmit}
        >
          <input
            className="input-text "
            type="text"
            placeholder="Enter a city"
            onChange={handleInput}
          />
          <input className="btn w-25 input-btn" type="submit" value="Search" />
        </form>
        <WeatherDisplay weatherData={data} />
        <WeatherForecast coordinates={data.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
