import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast({ forecatData }) {
  return (
    <div className="WeatherForecast container ">
      <div className="forecast-line row ">
        <div className="col forecast-element ">
          <WeatherIcon code="01d" size={30} />
          <h5 className="weekday-forecast">Mon</h5>
          <p className="temp-values">
            18ºc <span className="min-temp">11ºC</span>
          </p>
        </div>
        <div className="col forecast-element">
          <WeatherIcon code="01d" size={30} />

          <h5 className="weekday-forecast">Mon</h5>
          <p className="temp-values">
            18ºc <span className="min-temp">11ºC</span>
          </p>
        </div>
        <div className="col forecast-element">
          <WeatherIcon code="01d" size={30} />

          <h5 className="weekday-forecast">Mon</h5>
          <p className="temp-values">
            18ºc <span className="min-temp">11ºC</span>
          </p>
        </div>
        <div className="col d-none d-sm-flex forecast-element ">
          <WeatherIcon code="01d" size={30} />

          <h5 className="weekday-forecast">Mon</h5>
          <p className="temp-values">
            18ºc <span className="min-temp">11ºC</span>
          </p>
        </div>
        <div className="col d-none d-md-flex forecast-element ">
          <WeatherIcon code="01d" size={30} />

          <h5 className="weekday-forecast">Mon</h5>
          <p className="temp-values">
            18ºc <span className="min-temp">11ºC</span>
          </p>
        </div>
      </div>
    </div>
  );
}
