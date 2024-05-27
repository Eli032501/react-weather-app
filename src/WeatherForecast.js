import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleRespnse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast container ">
        <div className="forecast-line row ">
          <div className="col ">
            <WeatherForecastDay forecastData={forecast[1]} />
          </div>
          <div className="col ">
            <WeatherForecastDay forecastData={forecast[2]} />
          </div>
          <div className="col ">
            <WeatherForecastDay forecastData={forecast[3]} />
          </div>
          <div className="col d-none d-sm-flex">
            <WeatherForecastDay forecastData={forecast[4]} />
          </div>
          <div className="col d-none d-md-flex">
            <WeatherForecastDay forecastData={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    let apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRespnse);

    return "Loading...";
  }
}
