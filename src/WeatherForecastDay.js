import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ forecastData }) {
  function weekDay() {
    let date = new Date(forecastData.dt * 1000);
    let day = date.getDay();

    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return week[day];
  }
  return (
    <div className="WeatherForecastDay forecast-element  ">
      <WeatherIcon code={forecastData.weather[0].icon} size={30} />
      <h5 className="weekday-forecast">{weekDay()}</h5>
      <p className="temp-values">
        {Math.round(forecastData.temp.max)}ºc{" "}
        <span className="min-temp">{Math.round(forecastData.temp.min)}ºC</span>
      </p>
    </div>
  );
}
