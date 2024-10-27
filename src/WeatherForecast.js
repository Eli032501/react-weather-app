import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

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
    let latitude = coordinates.latitude;
    let longitude = coordinates.longitude;
    let apiKey = "ba3t92f6af6b8204143cbo1c5a032ba3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleRespnse);

    return "Loading...";
  }
}
