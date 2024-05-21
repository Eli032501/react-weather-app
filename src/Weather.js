import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <span>
        <input type="text" placeholder="Enter a city" />
      </span>
    </div>
  );
}
