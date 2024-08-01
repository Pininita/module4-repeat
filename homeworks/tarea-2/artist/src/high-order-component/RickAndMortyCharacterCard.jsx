import React from "react";
import { CharacterCard } from "../components/CharacterCard";
import { useEffect} from "react";
import { useState } from "react";

export const RickAndMortyCharacterCard = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");

    const rickAndMortyCharacterId = props.id;

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data)
                setName(data.name)
                setImage(data.image);
                setGender(data.gender);
                setStatus(data.status);
            })
            .catch((error) => console.error("error find: ", error))
    }, [])

    return (
        <>
            <div>
                <CharacterCard
                    name={name}
                    image={image}
                    gender={gender}
                    status={status}
                />
            </div>

        </>
    )
}
