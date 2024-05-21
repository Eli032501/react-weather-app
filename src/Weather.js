import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDisplay from "./WeatherDisplay";

export default function Weather({ defaultCity }) {
  const [data, setData] = useState({ ready: false });

  function handleResponse(response) {
    setData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sky: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <WeatherDisplay weatherData={data} />
      </div>
    );
  } else {
    const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
