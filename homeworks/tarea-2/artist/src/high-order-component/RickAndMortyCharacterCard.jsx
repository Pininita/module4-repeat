import React from "react";
import { CharacterCard } from "../components/CharacterCard";
import { useEffect } from "react";
import { useState } from "react";
import { ButtonComponent } from "../components/ButtonComponent";

export const RickAndMortyCharacterCard = () => {
    

    const [characterList, setCharacterList] = useState([]);
    const [offset, setOffset] = useState(1)


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${offset}`)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data)
                setCharacterList(data.results)
            })
            .catch((error) => console.error("error found: ", error))
    }, [offset])

    return (
       <>
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
                {/* <button>next page</button>
                {offset}
                <button>prev page</button> */}
                <ButtonComponent/>
            </section>
        </>
    )
}
