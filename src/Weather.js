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
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      sky: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "ba3t92f6af6b8204143cbo1c5a032ba3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
          <input className="btn input-btn" type="submit" value="Search" />
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
