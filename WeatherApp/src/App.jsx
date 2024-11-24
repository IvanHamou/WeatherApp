import React from 'react'
import styled from 'styled-components'
import { WeatherProvider } from './contexts/WeatherContext'
import WeatherSearch from './components/WeatherSearch'

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`

function App() {
  return (
    <WeatherProvider>
      <AppContainer>
        <WeatherSearch />
      </AppContainer>
    </WeatherProvider>
  )
}

export default App