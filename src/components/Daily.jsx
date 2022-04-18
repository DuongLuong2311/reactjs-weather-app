import React from 'react'

export default function Daily(prop) {
  return (
    <div className="weather-container">
      <div className="location">
        <i className="fa-solid fa-city"></i>
        {prop.city}, {prop.country}
      </div>

      <div className="temp">
        <i className="fa-solid fa-sun"></i>
        {prop.temp}°C
      </div>

      <div className="weather">
        <i className="fa-solid fa-cloud"></i>
        {prop.weather}
      </div>

      <div className="wind">
        <i className="fa-solid fa-wind"></i>
        {prop.wind} m/s
      </div>


    </div>
  )
}