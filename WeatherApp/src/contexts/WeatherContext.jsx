import React, { createContext, useReducer, useMemo } from 'react'

const WeatherContext = createContext()

const initialState = {
  weather: null,
  loading: false,
  error: null,
}

function weatherReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, weather: action.payload }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  const fetchWeather = async (city) => {
    dispatch({ type: 'FETCH_START' })
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db0b06cc6f38813a67bfd0845f63d77e&units=metric`
      )
      if (!response.ok) {
        throw new Error('Weather data not found')
      }
      const data = await response.json()
      dispatch({ type: 'FETCH_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message })
    }
  }

  const value = useMemo(() => ({ ...state, fetchWeather }), [state])

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext