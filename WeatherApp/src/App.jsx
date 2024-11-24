import React from 'react'
import styled from 'styled-components'
import WeatherSearch from './components/WeatherSearch'


const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`

function App() {
  return (
      <AppContainer>
        <WeatherSearch />
      </AppContainer>
  )
}

export default App