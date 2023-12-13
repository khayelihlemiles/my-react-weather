import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.data.date} />
          <strong>{props.data.description}</strong>
          <li>
            Humidity:{props.data.humidity}, Wind speed:{props.data.wind}
            km/hr
          </li>
        </li>
      </ul>
      <h2>
        <img src={props.data.iconUrl} alt={props.data.description} />

        <WeatherTemperature celsius={props.data.temperature} />
      </h2>
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
