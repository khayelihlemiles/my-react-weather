import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °c|
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let farenheitTemperature = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °c
          </a>
          | °F{" "}
        </span>
      </span>
    );
  }
}
