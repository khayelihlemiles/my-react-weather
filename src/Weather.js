import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather border m-5">
      <h1>Sydney</h1>
      <ul>
        <li>
          Monday 22:36 <strong>Slight rainfall</strong>
          <li>Humidity:56%, Wind speed:2.1km/hr </li>
        </li>
      </ul>
      <h2>🌦25c</h2>
      <div className="container">
        <div className="row">
          <div className="col border m-2">
            🌧
            <br />
            Tue
            <br />
            22|15
          </div>
          <div className="col border m-2">
            🌦
            <br />
            Wed
            <br />
            14|31
          </div>
          <div className="col border m-2">
            ☀<br />
            Thu
            <br />
            16|33
          </div>
          <div className="col border m-2">
            ☀<br />
            Fri
            <br />
            13|34
          </div>
          <div className="col border m-2">
            🌧
            <br />
            Sat
            <br />
            16|22
          </div>
        </div>
      </div>
    </div>
  );
}
