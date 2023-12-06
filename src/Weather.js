import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  const { ready, setReady } = useState(false);
  const { weatherData, setWeatherData } = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: 12,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="weather">
        <form>
          <input type="text" placeholder="Enter a city.." className="type" />
          <input type="submit" value="search" className="button" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Monday 22:36, <strong>{weatherData.description}</strong>
            <li>
              Humidity:{weatherData.humidity}, Wind speed:{weatherData.wind}/hr
            </li>
          </li>
        </ul>
        <h2>
          🌦
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          °c
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
  } else {
    const apiKey = "79be4f630f69t8bffa4o15edaf3814a6";
    let city = "Sydney";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
