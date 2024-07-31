import React from 'react'
import RickAndMortyCharacterCard from './high-order-component/RickAndMortyCharacterCard'
import './App.css'

function App() {

  return(
    <>
      <h1>RICK AND MORTY CHARACTERS</h1>
      <div className='app-characters-card'>
        <RickAndMortyCharacterCard id={1}/>
        <RickAndMortyCharacterCard id={2}/>
        <RickAndMortyCharacterCard id={3}/>
        <RickAndMortyCharacterCard id={10}/>
      </div>

    </>
  )
}

export default App
