import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="row justify-content-between">
          <input
            className="input-text "
            type="text"
            placeholder="Enter a city"
          />
          <input className="btn w-25 input-btn" type="submit" value="Search" />
        </div>
      </div>
    </div>
  );
}
