import React, { useContext } from 'react'
import styled from 'styled-components'
import WeatherContext from '../contexts/WeatherContext'

const DisplayContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
`

const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Temperature = styled.h2`
  font-size: 48px;
  margin: 0;
`

const Description = styled.p`
  font-size: 24px;
  margin: 10px 0;
`

function WeatherDisplay() {
  const { weather, loading, error } = useContext(WeatherContext)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!weather) return null

  return (
    <DisplayContainer>
      <h2>{weather.name}</h2>
      <WeatherInfo>
        <div>
          <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
          <Description>{weather.weather[0].description}</Description>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      </WeatherInfo>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </DisplayContainer>
  )
}

export default WeatherDisplay