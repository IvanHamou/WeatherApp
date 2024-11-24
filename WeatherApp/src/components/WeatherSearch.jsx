import React, { useState, useContext } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin: 20px 0;
`

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 70%;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4a90e2;
  color: white;
  border: none;
  cursor: pointer;
`

export default function WeatherSearch() {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city) {
      alert(city)
    }
  }

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          aria-label="City name"
        />
        <Button type="submit">Search</Button>
      </form>
    </SearchContainer>
  )
}
