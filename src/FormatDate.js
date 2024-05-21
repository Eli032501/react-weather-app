import React from "react";

export default function FormatDate({ currentDate }) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let dayWeek = weekDays[currentDate.getDay()];
  let thisMonth = months[currentDate.getMonth()];

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div className="FormatDate">
      {dayWeek}, {today} {thisMonth} | {hours}:{minutes}
    </div>
  );
}
