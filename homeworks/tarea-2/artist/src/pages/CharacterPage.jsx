import React from 'react'
import { RickAndMortyCharacterCard } from '../high-order-component/RickAndMortyCharacterCard'

export const CharacterPage = () => {

    return (
        <>
            <h1>RICK AND MORTY CHARACTERS</h1>
            <div className='app-characters-card'>
                <RickAndMortyCharacterCard />
            </div>


        </>
    )
}

