import React, { useState } from 'react'
import { RickAndMortyCharacterCard } from '../high-order-component/RickAndMortyCharacterCard'

export const CharacterPage = () => {

    const [nameFilter, setNameFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [charactersList, setCharactersList] = useState([])

    const onSearch = () => {
        const filterParams = new URLSearchParams({
            name: nameFilter,
            gender: genderFilter,
        });

        fetch("https://rickandmortyapi.com/api/character/" + filterParams)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCharactersList(data.results);
            });
    }

    return (
        <>
            <h1>RICK AND MORTY CHARACTERS</h1>
            <div>
                <input
                    type="text"
                    id='searchInput'
                    placeholder='Search...'
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />
                <select
                    id="gender"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="genderless">Genderless</option>
                </select>
                <button type='button' onClick={onSearch}>Search</button>
            </div>

            <div className='app-characters-card'>
                <RickAndMortyCharacterCard />
            </div>


        </>
    )
}

