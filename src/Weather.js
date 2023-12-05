import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input type="text" placeholder="Enter a city.." className="type" />
        <input type="submit" value="search" className="button" />
      </form>
      <h1>Sydney</h1>
      <ul>
        <li>
          Monday 22:36, <strong>Slight rainfall</strong>
          <li>Humidity:56%, Wind speed:2.1km/hr</li>
        </li>
      </ul>
      <h2>🌦25°c</h2>
      <div className="weekdays">
        <div>
          🌧
          <br />
          Tue
          <br />
          22°|<strong>15°</strong>
        </div>
        <div>
          🌦
          <br />
          Wed
          <br />
          14°|<strong>31°</strong>
        </div>
        <div>
          ☀<br />
          Thu
          <br />
          16°|<strong>33°</strong>
        </div>
        <div>
          ☀<br />
          Fri
          <br />
          13°|<strong>34°</strong>
        </div>
        <div>
          🌧
          <br />
          Sat
          <br />
          16°|<strong>22°</strong>
        </div>
      </div>
    </div>
  );
}
