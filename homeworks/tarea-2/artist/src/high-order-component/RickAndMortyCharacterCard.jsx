import React from "react";
import { CharacterCard } from "../components/CharacterCard";
import { useEffect } from "react";
import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";
import {useLocation} from 'react-router-dom'

export const RickAndMortyCharacterCard = () => {


    const [characterList, setCharacterList] = useState([]);
    const [offset, setOffset] = useState(1)

    const [nameFilter, setNameFilter] = useState('')
    const [genderFilter, setGenderFilter] = useState('')



    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${offset}&name=${nameFilter}&gender=${genderFilter}`)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data)
                setCharacterList(data.results)
            })
            .catch((error) => console.error("error found: ", error))
        console.log(offset, 'soy offset');
    }, [offset, nameFilter, genderFilter])

        console.log(genderFilter);


    return (
        <>
            {/* starting search bar */}
            <div>
                <input type="text" id='searchInput' placeholder='Search...' value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                <select name="" id="gender" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                    <option value="genderless">Genderless</option>
                </select>
                {/* <button type='button' onClick={handleSearch}>search</button> */}
            </div>
            {/* ending search bar */}
            <div className="item-charactercard">
                {characterList.map((characters) => (
                    <div   key={characters.id}>
                        <CharacterCard
                            name={characters.name}
                            image={characters.image}
                            gender={characters.gender}
                            status={characters.status}
                        />
                    </div>

                ))
                }
            </div>
            <br />
            <section className='button-section-characterpage'>
                <ButtonComponent
                    pages={offset}
                    setpages={setOffset}
                />
            </section>
        </>
    )
}
